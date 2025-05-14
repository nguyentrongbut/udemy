"use server"
import {connectToDatabase} from "@/lib/mongoose";
import User, {IUser} from "@/database/user.model";

export default async function createUse(params: IUser){
    try {
        connectToDatabase();
        const newUser = await User.create(params);
        return newUser;
    }catch (error) {
        console.log("error", error)
    }
}