import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import notify from "../../../Services/NotifyService";
import socketService from "../../../Services/socketService";
import vacationsService from "../../../Services/VacationService";
import config from "../../../Utils/Config";
import "./AddVacation.css";

function AddVacation(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<VacationModel>();

    const navigate = useNavigate();

    let currDate = new Date().toString();
    const newCurrDate = vacationsService.formatDateTime(currDate);





    async function submit(vacation: VacationModel) {
        
        try {

            const addedVacation = await vacationsService.addNewVacation(vacation);

            socketService.send(addedVacation);
            
            notify.success("Vacation has been added!");

            navigate("/vacations"); 
    
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="AddVacation Box">

            <form onSubmit={handleSubmit(submit)}>

                <h2>Add Vacation</h2>

                <label>Description: </label>
                <input className="form-control" type="text" {...register("description", {
                    required: { value: true, message: "Missing description" }
                })} />
                <span>{formState.errors.description?.message}</span>

                <label>Location: </label>
                <input className="form-control" type="text" {...register("location", {
                    required: { value: true, message: "Missing location" }
                })} />
                <span>{formState.errors.location?.message}</span>

                <label>Price: </label>
                <input className="form-control" type="number" step="0.01" {...register("price", {
                    required: { value: true, message: "Missing price" },
                    min: { value: 0, message: "Price can't be negative" },
                    max: { value: 10000, message: "Price can't exceed 1000" },
                })} />
                <span>{formState.errors.price?.message}</span>

                <label>Start date:</label>
                <input className="form-control" type="date" min={newCurrDate} {...register("startDate", {
                    required: { value: true, message: "Missing start date" }
                })} />
                <span>{formState.errors.startDate?.message}</span>

                <label>End date:</label>
                <input className="form-control" type="date" min={newCurrDate} {...register("endDate", {
                    required: { value: true, message: "Missing end date" }
                })} />
                <span>{formState.errors.endDate?.message}</span>

                <label>Image: </label>
                <input className="form-control" type="file" accept="image/*" required {...register("image")} />

          

                <button className="btn btn-outline-secondary">Add</button>

            </form>

        </div>
    );
}

export default AddVacation;
