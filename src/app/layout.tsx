import React from "react";
import './globals.css';
import {Metadata} from "next";
import {manrope, roboto} from "@/utils";
import Sidebar from "@/components/layout/Sidebar";


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
        <div className="wrapper grid grid-cols-[300px_minmax(0,1fr)] h-screen">
            <Sidebar></Sidebar>
            <main>
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
