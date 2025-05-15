import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";
import {CourseGrid} from "@/components/common";
import createUse from "@/lib/actions/user.actions";

export default async function Home () {
    const user = await createUse({
        clerkId: "clerk123",
        email_address: "cloly@gmail.com",
        username: "cloly",
    })
    console.log(user)
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
