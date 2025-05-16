import React from "react";
import {cn} from "@/lib/utils";

const Heading = ({children, className = ""}: { children: React.ReactNode, className?:string }) => {
    return (
        <h1 className={cn("text-2xl lg:text-3xl font-bold", className)}>
            {children}
        </h1>
    )
}

export default Heading;