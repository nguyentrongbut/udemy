import React from "react";
import './globals.css';
import {Metadata} from "next";
import {manrope, roboto} from "@/utils";
import {ClerkProvider} from "@clerk/nextjs";
import {ThemeProvider} from "@/components/common/ThemeProvider";


export const metadata: Metadata = {
    title: 'Udemy',
    description: 'Nền tảng học trực tuyến',
}

export default function RootLayout
({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body
                className={`${manrope.variable} ${roboto.variable} font-primary`}
            >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    );
}
