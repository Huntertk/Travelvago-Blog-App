import { NextFunction, Request, Response } from "express";
import Blog, { type TypeBlog } from "../models/blogModel";
import path from "path";
import { unlink } from "fs";
import { generateSlug } from "../utils/generateSlug";
import AppError from "../error/customError";
// import {
//     deleteImage,
//     uploadImage 
// } from "../utils/uploadImage";
import { TypeBaseQuery, type TypeBlogQuery } from "../utils/types";

export const createNewBlog = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const blogInputPyaload:TypeBlog = req.body;

        if(!blogInputPyaload.title || !blogInputPyaload.category || !blogInputPyaload.subCategory || !blogInputPyaload.summary){
            return next(new AppError("Please provide all values", 400));

        }
        const isTitleExist = await Blog.findOne({title:blogInputPyaload.title});
        
        if(isTitleExist){
            return next(new AppError("Blog already created with this title", 400))
        }
        const imageFile = req.file as Express.Multer.File;
        // const imageUrl = await uploadImage(imageFile);
        // blogInputPyaload.image = imageUrl;
        blogInputPyaload.image = path.join('/assets/images', imageFile.filename);
        blogInputPyaload.slug = generateSlug(blogInputPyaload.title);
        await Blog.create(blogInputPyaload);
        return res.status(200).json({
            message: 'Blog Created Successfully'
        });
    } catch (error) {
        if(req.file){
            unlink(req.file.path, () => {
                console.log("Exception Occoured File Removed");
            })
        }
        return next(error);
    }
}

export const editBlog = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const editBlogInputPayload:TypeBlog = req.body;
        const imageFile = req.file as Express.Multer.File;
        const blog = await Blog.findById(editBlogInputPayload._id);
        if(!blog){
            return next(new AppError("Blog Not Found with this id", 400))
        }
        if(imageFile){
            // const publicId = blog.image.split('/').pop()?.split('.')[0];
            // if(publicId){
            //     await deleteImage(publicId)
            // }
            // const imageUrl = await uploadImage(imageFile);
            // blog.image = imageUrl;
            blog.image = path.join('/assets/images', imageFile.filename);
        }
        if(editBlogInputPayload.category){
            blog.category = editBlogInputPayload.category
        }
        if(editBlogInputPayload.subCategory){
            blog.subCategory = editBlogInputPayload.subCategory
        }
        if(editBlogInputPayload.content){
            blog.content = editBlogInputPayload.content
        }
        if(editBlogInputPayload.summary){
            blog.summary = editBlogInputPayload.summary
        }
        if(editBlogInputPayload.title){
            blog.title = editBlogInputPayload.title
            blog.slug = generateSlug(editBlogInputPayload.title);
        }
        await blog.save();
        return res.status(200).json({message:"blog updated"})
    } catch (error) {
        return next(error);
    }
}

export const deleteBlog = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const blogId:string = req.body.blogId;
        const blog = await Blog.findById(blogId);

        if(!blog){
            return next(new AppError("Blog Not Found", 400))
        }
        // const publicId = blog.image.split('/').pop()?.split('.')[0];
        // if(publicId){
        //     await deleteImage(publicId)
        // }
        await blog.deleteOne();
        return res.status(200).json({message:"blog deleted"})
    } catch (error) {
        return next(error)
    }
}

//Get Blogs
export const getBlogs = async(req:Request, res:Response, next:NextFunction) => {
    const {search,category, sortby,subcategory, fields}:TypeBlogQuery = req.query;

    const page:number = Number(req.query.page) || 1;
    const limit:number = 10;
    const skip:number = (page - 1) * limit;
    const baseQuery:TypeBaseQuery = {}
    let sort:string = "-createdAt";
    let fieldsQuery:string = "-__v";

    if(search){
        baseQuery.title = {
            $regex:search,
            $options:"i"
        }
    }

    if(subcategory){
        baseQuery.subCategory = subcategory
    }
    if(category){
        baseQuery.category = category
    }

    if(sortby){
        sort = sortby
    }

    if(fields){
        const formatField = fields.split(',').join(' ')
        fieldsQuery = formatField
    }
    
        
    try{
        const blogs = await Blog.find(baseQuery)
        .sort(sort)
        .limit(limit)
        .skip(skip)
        .select(fieldsQuery)

        const filteredBlogs = await Blog.find(baseQuery);

        const totalPage = Math.ceil(filteredBlogs.length / limit);

        return res.status(200).json({
            success:true,
            totalPage,
            totalResult:blogs.length,
            blogs
        })
    } catch (error) {
        return next(error);
    }
}

//get blog by id
export const getBlog = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const blogId:string = req.params.blogId;
        const blog = await Blog.findById(blogId);

        if(!blog){
            return next(new AppError("No Blogs Found", 404))
        }

        return res.status(200).json(blog);
    } catch (error) {
        return next(error)
    }
} 

//Demo Blog Creating Api
export const insertNewBlog = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const blogInputPyaload:TypeBlog = req.body;
        if(!blogInputPyaload.title || !blogInputPyaload.category || !blogInputPyaload.content || !blogInputPyaload.image || !blogInputPyaload.subCategory || !blogInputPyaload.summary){
            return next(new AppError("Please provide all values", 400))
        }
        blogInputPyaload.slug = generateSlug(blogInputPyaload.title);
        await Blog.create(blogInputPyaload);
        return res.status(200).json({
            message: 'Blog Created Successfully'
        });
    } catch (error) {
        return next(error);
    }
}