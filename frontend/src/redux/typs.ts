export type TypeAdmin = {
    _id:string;
    name:string;
    email:string;
    password:string;
    role:string,
}

export type TypeBlog = {
    content:string;
    title:string;
    image:string;
    category:string;
    subCategory:string;
    summary:string;
    slug:string;
}

export type TypeFilterBlog = {
    featured:boolean|undefined;
    category:string|undefined;
    subCategory:string|undefined;
    search:string|undefined;
    sortby:string|undefined;
    page:number;
}