import React,{ useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/addNewBlog.scss';
import toast from 'react-hot-toast';
import { useCreateBlogMutation } from '../redux/api/blogApi';
import { useNavigate } from 'react-router-dom';
import BlogInput from '../components/admin/BlogInput';

const AddNewBlog = () => {
    const [content, setContent] = useState<string>('');
    const editorRef = useRef<ReactQuill | null>(null);
    const [createBlog, {isLoading:createBlogLoading, error:createBlogError, data:createBlogData}] = useCreateBlogMutation()
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
        if(!formData.category || !formData.subCategory || !formData.summary || !formData.title || !selectedFile || !content){
            toast.error("Please provide all values")
            return
        }
        const blogFormData:FormData = new FormData();
        blogFormData.append('title', formData.title)
        blogFormData.append('category', formData.category)
        blogFormData.append('subCategory', formData.subCategory)
        blogFormData.append('summary', formData.summary)
        blogFormData.append('content', content)
        blogFormData.append('image', selectedFile);
        createBlog(blogFormData);
    }


    useEffect(() => {
        if(createBlogData){
            toast.success("Blog Created")
            navigate("/admin/dashboard")
        }

        if(editorRef.current){
            editorRef.current.focus();
        }
        if(createBlogError){
            if ('data' in createBlogError) {
              toast.error(`${createBlogError.data}`);
            }
        }

    },[createBlogError, createBlogData])

    return (
       <BlogInput 
        content={content}
        createBlogLoading={createBlogLoading}
        editorRef={editorRef}
        formData={formData}
        handleFileChange={handleFileChange}
        handleFormDataChange={handleFormDataChange}
        handleFormSubmit={handleFormSubmit}
        imageUrl={imageUrl}
        setContent={setContent}

       />
    )
}

export default AddNewBlog