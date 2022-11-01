import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import store from "../../../Redux/Store";
import notify from "../../../Services/NotifyService";
import socketService from "../../../Services/socketService";
import vacationsService from "../../../Services/VacationService";
import config from "../../../Utils/Config";
import Modal from "../Modal/Modal";
import "./VacationCard.css";

interface VacationCardProps {
    vacationProp: VacationModel;
    flagFunc: Function;
}

function VacationCard(props: VacationCardProps): JSX.Element {

    const role = store.getState().authState.user.role
    const navigate = useNavigate();
    const [deleteFlag, setDeleteFlag] = useState('');

    async function addFollower(vacationId: number, id: number) {

        try {
            await vacationsService.addToFollowingList(vacationId, id);
            notify.success("You are following");
            props.flagFunc();
            // window.location.reload();

            // navigate("/vacations");
        }
        catch (err: any) {
            notify.error(err);
        }

    }

    async function removeFollower(vacationId: number) {
        try {
            await vacationsService.removeFollowingList(vacationId);
            notify.success("You are not following");
            props.flagFunc();
            // win
            // window.location.reload();

        }
        catch (err: any) {
            notify.error(err);
        }
    }

    async function deleteVacation(vacationId: number) {
        try {
            // const vacationId = props.vacationProp.vacationId;
            await vacationsService.deleteOneVacation(vacationId);
            socketService.sendDelete(props.vacationProp);
            notify.success("The vacation was deleted");
            setDeleteFlag('');

        }
        catch (err: any) {
            notify.error(err);
        }


    }

    function handleDelete() {
        if (!deleteFlag) {
            setDeleteFlag('Y');
        }
        else {
            setDeleteFlag('');
        }

    }

    return (
        <div className="VacationCard Box" >
            <div>
                <div className="actionButtons">
                    
                        {(role === 'Admin') ? <NavLink to={`/vacations/edit/${props.vacationProp.vacationId}`} className="edit-btn btn btn-outline-warning">✏️</NavLink> : <></>}
                    
                    
                        {(role === 'Admin') ? <button className="edit-btn btn btn-outline-primary" onClick={handleDelete}>❌</button> : <></>}
                    
                </div>

                {deleteFlag && <Modal vacationLocation={props.vacationProp.location} deleteFunction={deleteVacation} vacationId={props.vacationProp.vacationId} handleDelete={handleDelete} />}
            </div>
            <div className="img-product">
                <img src={config.vacationImageUrl + props.vacationProp.imageName} alt="Location picture" className="img-thumbnail" />
            </div>
            <div className="card-title">
                <h3>{props.vacationProp.location}</h3>
            </div>
            <div className="price">
                ${props.vacationProp.price}
            </div>
            <div className="dates">
                {vacationsService.formatDateTime(props.vacationProp.startDate)} - {vacationsService.formatDateTime(props.vacationProp.endDate)}
            </div>
            <div className="description">
                {props.vacationProp.description}
            </div>
            <div className="rates">
                <div className="rates-rates"> {(role === 'User') ?
                    <div>
                        {(props.vacationProp.followedVacation && role === "User") ? <button type="button" className="watch-list btn btn-outline-primary yellowBg" onClick={() => { removeFollower(props.vacationProp.vacationId) }}>💖</button> :
                            <button type="button" className="watch-list btn btn-outline-primary" onClick={() => { addFollower(props.vacationProp.vacationId, props.vacationProp.userId) }}>💖</button>}
                    </div> : <></>}
                </div>

                <div className="followers">
                    <p>Followers: {props.vacationProp.followers}</p>
                </div>

            </div>
        </div>
    );
}

export default VacationCard;



