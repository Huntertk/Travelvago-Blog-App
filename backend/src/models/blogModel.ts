import mongoose from "mongoose";



export type TypeBlog = {
    _id:string;
    content:string;
    title:string;
    image:string;
    category:string;
    subCategory:string;
    summary:string;
    slug:string;
}

const blogSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
        unique: true,
      },
      image: {
        type: String,
        required:true
      },
      summary: {
        type: String,
        required:true
      },
      category: {
        type: String,
      },
      subCategory: {
        type: String,
      },
      slug: {
        type: String,
        required: true,
        unique: true,
      },
    
},{timestamps:true})


const Blog = mongoose.model<TypeBlog>('Blog', blogSchema)
export default Blog;