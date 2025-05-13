import React from "react";
import './globals.css';
import {Metadata} from "next";
import {manrope, roboto} from "@/components/fonts";

export const metadata: Metadata = {
    title: 'Udemy',
    description: 'Nền tảng học trực tuyến',
}

export default function RootLayout
({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
            className={`${manrope.variable} ${roboto.variable} font-primary`}
        >
        {children}
        </body>
        </html>
    );
}
