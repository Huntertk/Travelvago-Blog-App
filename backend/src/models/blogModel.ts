import mongoose from "mongoose";



export type TypeBlog = {
    content:string;
    title:string;
    image:string;
    category:string;
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
      category: {
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