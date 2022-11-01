import VacationModel from "../Models/VacationModel";

export class VacationsState {
    public vacation: VacationModel[] = [];
}

export enum VacationsActionType {
    FetchVacation = "FetchVacation",
    AddVacation = "AddVacation",
    UpdateVacation = "UpdateVacation",
    DeleteVacation = "DeleteVacation",
    LogOut = "LogOut"
}

export interface vacationAction {
    type: VacationsActionType;
    payload?: any;
}

export function fetchVacationsAction(vacation: VacationModel[]): vacationAction {
    return { type: VacationsActionType.FetchVacation, payload: vacation };
}
export function addVacationAction(vacation: VacationModel): vacationAction {
    return { type: VacationsActionType.AddVacation, payload: vacation };
}
export function updateVacationAction(vacation: VacationModel): vacationAction {
    return { type: VacationsActionType.UpdateVacation, payload: vacation };
}
export function deleteVacationAction(id: number): vacationAction {
    return { type: VacationsActionType.DeleteVacation, payload: id };
}
export function deleteAllVacations(): vacationAction {
    return { type: VacationsActionType.LogOut};
}

export function vacationReducer(currentState = new VacationsState(), action: vacationAction): VacationsState {

    const newState = { ...currentState };

    switch (action.type) {

        case VacationsActionType.FetchVacation:
            newState.vacation = action.payload; 
            break;

        case VacationsActionType.AddVacation:
            const id = newState.vacation.findIndex(v => v.vacationId === action.payload.vacationId)
            if(id !== -1){
                return;
            }
            newState.vacation.push(action.payload); 
            break;

        case VacationsActionType.UpdateVacation:
            const indexToUpdate = newState.vacation.findIndex(v => v.vacationId === action.payload.vacationId); // Here the payload is a single object to update.
            if (indexToUpdate >= 0) {
                newState.vacation[indexToUpdate] = action.payload;
            }
            break;

        case VacationsActionType.DeleteVacation:
            const indexToDelete = newState.vacation.findIndex(v => v.vacationId === action.payload); // Here the payload is the id to delete.
            if (indexToDelete >= 0) {
                newState.vacation.splice(indexToDelete, 1);
            }
            break;
            case VacationsActionType.LogOut:
            newState.vacation = [];
            break;
    }

    return newState;
}
