"use server"
import {connectToDatabase} from "@/lib/mongoose";
import User from "@/database/user.model";
import {TCreateUserParams} from "@/types";

export default async function createUse(params: TCreateUserParams) {
    try {
        connectToDatabase();
        const newUser = await User.create(params);
        return newUser;
    }catch (error) {
        console.log("error", error)
    }
}