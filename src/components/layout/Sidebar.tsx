import React from "react";
import {menuItems} from "@/constants";
import Link from "next/link";
import ActiveLink from "@/components/common/ActiveLink";
import {TMenuItem} from "@/types";

const Sidebar = () => {
    return (
        <aside className="p-5 border-r border-r-gray-200 bg-white">
            <Link href="/" className="font-bold text-3xl inline-block mb-5">
                <span className="text-primary">U</span>
                cademy
            </Link>
            <ul className="flex flex-col gap-2">
                {menuItems.map(({title, url, icon}) => {
                    return (
                        <MenuItem
                            key={url}
                            url={url}
                            title={title}
                            icon={icon}
                        />
                    )
                })}
            </ul>
        </aside>
    )
}

const MenuItem = ({url = "/", title = "", icon}: TMenuItem) => {
    return (
        <li>
            <ActiveLink url={url}>
                {icon}
                {title}
            </ActiveLink>
        </li>
    )
        ;
};

export default Sidebar