import * as React from "react"

import {cn} from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({className, type, ...props}, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex outline-none h-10 rounded-md font-medium px-3 w-full text-sm bg-white border border-gray-200 focus:!border-primary transition-all dark:border-opacity-10 dark:bg-grayDarker",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export {Input}
