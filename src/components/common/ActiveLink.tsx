'use client'
import React from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {TActiveLink} from "@/types";

const ActiveLink = ({url, children}: TActiveLink) => {
    const pathname = usePathname()
    const isActive = url === pathname;
    return (
        <Link href={url}
              className={`p-3 rounded-md flex items-center gap-3 dark:text-grayDark
                      ${isActive  
                  ? "!text-white bg-primary svg-animate" 
                  : "hover:!text-primary hover:!bg-primary hover:!bg-opacity-10 transition-all"
              }`}
        >
            {children}
        </Link>
    )
};

export default ActiveLink;