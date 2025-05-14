import Heading from "@/components/typography/Heading";
import {CourseGrid} from "@/components/common";
import CourseItem from "@/components/course/CourseItem";

const page = () => {
    return (
        <>
            <Heading>Khu vực học tập</Heading>
            <CourseGrid>
                {
                    Array(3).fill(0).map((_, i) => <CourseItem key={i} />)
                }
            </CourseGrid>
        </>
    )
}

export default page;