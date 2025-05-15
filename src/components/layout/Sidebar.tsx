'use client'
import React from "react";
import {menuItems} from "@/constants";
import Link from "next/link";
import {TMenuItem} from "@/types";
import {ActiveLink} from "@/components/common";
import {useAuth, UserButton} from "@clerk/nextjs";
import {ModeToggle} from "@/components/common/ModeToggle";
import {IconUsers} from "@/components/icons";

const Sidebar = () => {
    const {userId} = useAuth()
    return (
        <aside
            className="p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker flex flex-col">
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
            <div className="mt-auto flex items-center justify-end gap-5">
                <ModeToggle></ModeToggle>
                {!userId
                    ? (
                        <Link href="/sign-in"
                              className="size-10 rounded-lg bg-primary text-white flex items-center justify-center">
                            <IconUsers className="size-5"></IconUsers>
                        </Link>
                    )
                    : (
                        <UserButton></UserButton>

                    )
                }
            </div>
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