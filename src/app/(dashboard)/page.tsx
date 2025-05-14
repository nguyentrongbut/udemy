import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";

export default function Home() {
  return (
    <div>
      <Heading>
          Khám phá
      </Heading>
        <div className="grid grid-cols-3 gap-8 mt-8">
            {
                Array(4).fill(0).map((_, i) => <CourseItem key={i} />)
            }
        </div>
    </div>
  );
}
