import Sidebar from "@/components/layout/Sidebar";
import React from "react";

export default function DashboardLayout
({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="wrapper grid grid-cols-[300px_minmax(0,1fr)] h-screen">
            <Sidebar></Sidebar>
            <main>
                {children}
            </main>
        </div>
    );
}
