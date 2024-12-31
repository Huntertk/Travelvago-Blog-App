import React,{ useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import toast from 'react-hot-toast';
import { useEditBlogMutation, useGetBlogByParamsQuery } from '../redux/api/blogApi';
import { useNavigate, useParams } from 'react-router-dom';
import BlogInput from '../components/admin/BlogInput';
import Loader from '../components/Loader';

const EditBlog = () => {
    const {blogId} = useParams();
    if(!blogId){
        window.location.href = "/admin/dashboard"
        return 
    }
    
    const {data:getBlogData, isLoading:getBlogLoading, error:getBlogError} = useGetBlogByParamsQuery({blogId});
    
    const [content, setContent] = useState<string>('');
    const editorRef = useRef<ReactQuill | null>(null);
    const [editBlog, {isLoading:editBlogLoading, error:editBlogError, data:editBlogData}] = useEditBlogMutation();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [formData, setFormData] = useState<{
        title:string;
        summary:string;
        category:string;
        subCategory:string;
    }>({
        category:"",
        subCategory:"",
        summary:"",
        title:""
    })

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file){
            setSelectedFile(file); 
            const blobUrl = URL.createObjectURL(file);
            setImageUrl(blobUrl); 
        } 
    };

    const handleFormDataChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))
    }

    const handleFormSubmit = () => {
        if(!formData.category || !formData.subCategory || !formData.summary || !formData.title || !content){
            toast.error("Please provide all values")
            return
        }
        const blogFormData:FormData = new FormData();
        if(getBlogData?._id){
            blogFormData.append("_id", getBlogData._id)
        }
        blogFormData.append('title', formData.title)
        blogFormData.append('category', formData.category)
        blogFormData.append('subCategory', formData.subCategory)
        blogFormData.append('summary', formData.summary)
        blogFormData.append('content', content)
        if(selectedFile){
            blogFormData.append('image', selectedFile);
        }
        editBlog(blogFormData);
    }


    useEffect(() => {
        if(getBlogData){
            setContent(getBlogData.content)
            setFormData({title:getBlogData.title, category:getBlogData.category, subCategory: getBlogData.subCategory,  summary:getBlogData.summary})
            setImageUrl(getBlogData.image)
        }

        if(editBlogData){
            toast.success("Blog Updated")
            navigate("/admin/dashboard")
        }
        if(getBlogError){
            navigate("/admin/dashboard")
        }

        if(editorRef.current){
            editorRef.current.focus();
        }
        if(editBlogError){
            if ('data' in editBlogError) {
              toast.error(`${editBlogError.data}`);
            }
        }

    },[editBlogError, editBlogData, getBlogError, getBlogData])

    if(getBlogLoading){
        return <Loader />
    }

    return (
        <>
        <h1>Edit Blog</h1>
        <BlogInput 
            content={content}
            createBlogLoading={editBlogLoading}
            editorRef={editorRef}
            formData={formData}
            handleFileChange={handleFileChange}
            handleFormDataChange={handleFormDataChange}
            handleFormSubmit={handleFormSubmit}
            imageUrl={imageUrl}
            setContent={setContent}
            BtnText='Update Blog'
            />
        </>
    )
}

export default EditBlog