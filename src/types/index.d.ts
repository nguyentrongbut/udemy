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

// User
type TCreateUserParams = {
    clerkId: string,
    username: string,
    email: string,
    name?: string,
    avatar?: string
}

export type { TActiveLink, TMenuItem, TCreateUserParams }