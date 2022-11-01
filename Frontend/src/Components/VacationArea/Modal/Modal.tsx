import "./Modal.css";

interface deleteVacation {
    deleteFunction: any;
    vacationId: number
    handleDelete:any
    vacationLocation: string;
}

function Modal(props: deleteVacation): JSX.Element {
    
    return (
        <div className="Modal">
            <p>Are you sure you want to delete {props.vacationLocation}?</p>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.handleDelete}>Close</button>
                        <button type="button" className="btn btn-danger" onClick={() => props.deleteFunction(props.vacationId)}>Delete</button>
                    </div>
    );
}

export default Modal;
