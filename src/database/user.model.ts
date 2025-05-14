import {Document, model, models, Schema} from "mongoose";
import {EUserRole, EUserStatus} from "@/types/enum";

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email_address: string;
    avatar: string;
    createdAt: Date;
    status: EUserStatus;
    role: EUserRole;
    courses: Schema.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
    clerkId: {type: String},
    name: {type: String},
    username: {type: String},
    email_address: {type: String},
    avatar: {type: String},
    courses: [{type: Schema.Types.ObjectId, ref: "Course"}],
    createdAt: {type: Date, default: Date.now},
    role: {
        type: String,
        enum: Object.values(EUserRole),
        default: EUserRole.USER
    },
    status: {
        type: String,
        enum: Object.values(EUserStatus),
        default: EUserStatus.ACTIVE
    }
});

const User = models.User || model("User", userSchema);

export default User;