export type TActiveLink = {
    url: string;
    children: React.ReactNode;
}

export type TMenuItem = {
    url: string;
    title: string;
    icon?: React.ReactNode;
};

// User
export type TCreateUserParams = {
    clerkId: string,
    username: string,
    email: string,
    name?: string,
    avatar?: string
}

// Course
export type ICreateCourseParams = {
    title: string,
    slug: string,
}
