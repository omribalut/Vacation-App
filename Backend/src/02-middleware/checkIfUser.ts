import { NextFunction, Request, Response } from "express";
import ErrorModel from "../03-models/error-model";
import UserModel from "../03-models/user-model";
import cyber from "../01-utils/cyber";


async function verifyIfUser(request: Request, response: Response, next: NextFunction): Promise<void> {

    const authorizationHeader = request.header("authorization");

    const isValid = await cyber.verifyToken(authorizationHeader);

    if(!isValid) {
        next(new ErrorModel(401, "You are not logged in"));
        return;
    }

    const user = await cyber.getUserFromToken(authorizationHeader);
 
    if(user.role !== "User") {
        next(new ErrorModel(403, "You are not authorized!"));
        return;
    }

    next();
}

export default verifyIfUser;