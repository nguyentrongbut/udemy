'use server'
import {ICreateCourseParams} from "@/types";
import {connectToDatabase} from "@/lib/mongoose";
import Course from "@/database/course.model";

// [GET BY SLUG]
export async function getCourseBySlug({slug} : {slug: string}) {
    try {
        connectToDatabase()
        const findCourse = await Course.findOne({slug});
        return {
            success: true,
            data: JSON.parse(JSON.stringify(findCourse))
        }
    } catch (error) {
        console.log("error", error)
    }
}

// [CREATE]
export async function createCourse(params: ICreateCourseParams) {
    try {
        connectToDatabase();
        const course = await Course.create(params);
        return {
            success: true,
            data: JSON.parse(JSON.stringify(course))
        };
    } catch (error) {
        console.log("error", error)
    }
}