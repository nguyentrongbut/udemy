import Link from "next/link";
import Image from "next/image";
import {IconClock, IconEye, IconStar} from "@/components/icons";

const CourseItem = () => {
    const courseInfo = [
        {
            title: "3000",
            icon: (className?: string) => <IconEye className={className}></IconEye>
        },
        {
            title: "5.0",
            icon: (className?: string) => <IconStar className={className}></IconStar>
        },
        {
            title: "30h25p",
            icon: (className?: string) => <IconClock className={className}></IconClock>
        }
    ]
    return (
        <div className="bg-white border dark:bg-grayDarker dark:border-opacity-10 border-gray-200 p-4 rounded-xl">
            <Link href="#" className="block h-[180px] relative">
                <Image
                    src="https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={300}
                    height={200}
                    sizes="@media(min-width: 640px) 300px, 100vw"
                    className="w-full h-full object-cover rounded-lg"
                ></Image>
                <span
                    className="inline-block px-3 py-1 rounded-full
                    absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs"
                >New</span>
            </Link>
            <div className="pt-4">
                <h3 className="font-bold text-lg mb-5">Khoá học NextJS Pro - Xây dựng E-learning system hoàn chỉnh</h3>
                <div className="flex items-center gap-3 mb-5 text-xs text-gray-500 dark:text-grayDark">
                    {
                        courseInfo.map((item, i) => (
                            <div className="flex items-center gap-2" key={i}>
                                {item.icon("size-4")}
                                <span>{item.title}</span>
                            </div>
                        ))
                    }
                    <div className="font-semibold text-primary ml-auto text-base">799.000</div>
                </div>
            </div>
            <Link href="#"
                  className="flex w-full justify-center items-center rounded-lg
                  text-white font-bold bg-primary h-12
                  "
            >Xem chi tiết</Link>
        </div>
    )
}

export default CourseItem;