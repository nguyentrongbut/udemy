import React from "react";

type TActiveLink = {
    url: string;
    children: React.ReactNode;
}

type TMenuItem = {
    url: string;
    title: string;
    icon?: React.ReactNode;
};

export type { TActiveLink, TMenuItem }