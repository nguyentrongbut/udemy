import Heading from "@/components/typography/Heading";
import CourseUpdate from "@/components/course/CourseUpdate";

const page = ({searchParams}: {
    searchParams: {
        slug: string
    }
}) => {
    console.log(searchParams?.slug)
    return (
        <>
            <Heading className="mb-8">
                Cập nhật khoá học
            </Heading>
            <CourseUpdate></CourseUpdate>
        </>)
}

export default page;