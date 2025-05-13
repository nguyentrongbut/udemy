import {connectToDatabase} from "@/lib/mongoose";

export default function Home() {
    const connect = connectToDatabase()
  return (
    <div>
      Home page
    </div>
  );
}
