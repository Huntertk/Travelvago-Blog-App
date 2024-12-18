export type TypeRegisterInputPayload = {
    name:string;
    email:string;
    password:string;
}

export type TypeLoginInputPayload = {
    email:string;
    password:string;
}

export type TypeUpdateMeInputPayload = {
    name:string;
    email:string;
}

export type TypeUpdateMyPasswordInputPayload = {
    newPassword:string;
    currentPassword:string;
}


export type TypeBaseQuery = {
    title?:{
        $regex:string;
        $options:string;
    };
    category?:string;
    subCategory?:string;
}


export type TypeBlogQuery = {
    search?:string;
    category?:string;
    subcategory?:string;
    sortby?:string;
    fields?:string;
}
