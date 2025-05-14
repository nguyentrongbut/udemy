import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";
import {CourseGrid} from "@/components/common";

export default function Home() {
  return (
    <>
      <Heading>
          Khám phá
      </Heading>
        <CourseGrid>
            {
                Array(4).fill(0).map((_, i) => <CourseItem key={i} />)
            }
        </CourseGrid>
    </>
  );
}
