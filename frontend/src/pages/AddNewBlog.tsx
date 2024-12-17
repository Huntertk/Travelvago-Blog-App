import React,{ useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/addNewBlog.scss';
import toast from 'react-hot-toast';
import { useCreateBlogMutation } from '../redux/api/blogApi';
import { VscLoading } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

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
        <div className='add_new_blog_container'>
            <div className="add_new_blog_image_upload">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                 {imageUrl && <img src={imageUrl} alt="Uploaded" />}
            </div>
            <div className="add_new_blog_title_and_summary_container">
                <input
                type="text"
                name='title'
                placeholder='Enter Blog Title'
                value={formData.title}
                onChange={handleFormDataChange}
                required
                />
                <textarea
                name="summary"
                rows={5}
                placeholder='Enter Blog Summary....'
                value={formData.summary}
                onChange={handleFormDataChange}
                required
                ></textarea>
                <select
                name="category"
                value={formData.category}
                onChange={handleFormDataChange}
                required
                >
                    <option value="">Select Category</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="singapore">Singapore</option>
                    <option value="dubai">Dubai</option>
                    <option value="bangkok">Bangkok</option>
                </select>
                <select
                name="subCategory"
                value={formData.subCategory}
                onChange={handleFormDataChange}
                required
                >
                    <option value="">Select Sub Category</option>
                    <option value="solo-travel">Solo Travel</option>
                    <option value="family-travel">Family Travel</option>
                    <option value="adventure-travel">Adventure Travel</option>
                    <option value="luxury-travel">Luxury Travel</option>
                    <option value="backpacking">Backpacking</option>
                </select>
            </div>
            <div className="add_new_blog_text_editor">
                <ReactQuill theme="snow" value={content} ref={editorRef} onChange={setContent} placeholder='Write blog here....'/>
            </div>
            <button className='create_btn' onClick={handleFormSubmit} disabled={createBlogLoading}>{createBlogLoading ? <VscLoading className='loading' /> : "Create Blog"}</button>
        </div>
    )
}

export default AddNewBlog