import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import store from "../../../Redux/Store";
import notify from "../../../Services/NotifyService";
import vacationsService from "../../../Services/VacationService"
import Loading from "../../LayoutArea/Loading/Loading";
import VacationCard from "../VacationCard/VacationCard";
import "./VacationList.css";

function VacationList(): JSX.Element {

    const [vacations, setVacation] = useState<VacationModel[]>([]);
    const [flag, setFlag] = useState(0);
    const role = store.getState().authState.user.role

    useEffect(() => {

        const unsubscribeMe = store.subscribe(() => {
            
            const test = store.getState().vacationState.vacation;
            
            setVacation([...test]);

        });

        vacationsService.getAllVacations()
            .then(vacations => {
                setVacation(vacations)
                
                ;
            })
            .catch(err => notify.error(err));

        return () => {
            unsubscribeMe();
        }

    }, [flag]);

    function handleFlagChange() {
        if (flag === 0) {
            setFlag(1)
        }
        else {
            setFlag(0)
        }
    }

    return (
        <div className="VacationList">

            <div className="add-btn">
                {(role === 'Admin') ? <NavLink to={'/vacations/new'} ><button className="btn btn-outline-success">Add Vacation ➕</button></NavLink> : <></>} &nbsp;
                {(role === 'Admin') ? <NavLink to={'/graphs'} ><button className="btn btn-outline-warning">Graphs <a><i className="fas fa-chart-line"></i></a></button></NavLink> : <></>}
                
            </div>

            <br />
            <div className="container">
            {vacations.length === 0 ? <Loading /> : <></>}

            {vacations.map(v => <VacationCard key={v.vacationId} vacationProp={v} flagFunc={handleFlagChange} />)}
            </div>
        </div>
    );
}

export default VacationList;
