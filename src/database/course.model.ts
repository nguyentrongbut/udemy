import {Document, model, models, Schema} from "mongoose";
import {ECourseLevel, ECourseStatus} from "@/types/enum";

export interface ICourse extends Document {
    _id: string,
    title: string,
    image: string,
    intro_url: string,
    desc: string,
    price: number,
    sale_price: number,
    slug: string,
    status: ECourseStatus,
    created_at: Date,
    author: Schema.Types.ObjectId,
    level: ECourseLevel,
    views: number,
    rating: number[],
    info: {
        requirement: string[],
        benefits: string[],
        qa: {
            question: string,
            answer: string
        }[]
    },
    lectures: Schema.Types.ObjectId[],
    _destroy: boolean,
}

const courseSchema = new Schema<ICourse>({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    image: {type: String},
    intro_url: {type: String},
    desc: {type: String},
    price: {type: Number},
    sale_price: {type: Number},
    status: {
        type: String,
        enum: Object.values(ECourseStatus),
        default: ECourseStatus.PENDING
    },
    author: {type: Schema.Types.ObjectId, ref: "User"},
    lectures: [
        {
            type: Schema.Types.ObjectId,
            ref: "Lecture"
        }
    ],
    rating: {type: [Number], default: [5]},
    views: {type: Number, default: 0},
    info: {
        requirement: {type: [String]},
        benefits: {type: [String]},
        qa: [
            {question: {type: String}, answer: {type: String}}
        ]
    },
    level: {
        type: String,
        enum: Object.values(ECourseLevel),
        default: ECourseLevel.INTERMEDIATE
    },
    _destroy: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now},
});

const Course = models.Course || model<ICourse>("Course", courseSchema);

export default Course;