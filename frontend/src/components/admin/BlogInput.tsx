import { VscLoading } from "react-icons/vsc";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import '../../styles/addNewBlog.scss';

type TypeBlogInputProps = {
    BtnText:string;
    imageUrl:string|null;
    content:string;
    createBlogLoading:boolean;
    editorRef: React.MutableRefObject<ReactQuill | null>;
    setContent: React.Dispatch<React.SetStateAction<string>>
    formData:{
        title:string;
        summary:string;
        category:string;
        subCategory:string;
    };
    handleFileChange:(event:React.ChangeEvent<HTMLInputElement>) => void;
    handleFormDataChange:(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleFormSubmit:() => void;
}

const BlogInput = ({BtnText,createBlogLoading,editorRef,setContent,content,imageUrl, formData,handleFileChange,handleFormDataChange,handleFormSubmit}:TypeBlogInputProps) => {
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
                <ReactQuill className='textEditorQuill' theme="snow" value={content} ref={editorRef} onChange={setContent} placeholder='Write blog here....'/>
            </div>
            <button className='create_btn' onClick={handleFormSubmit} disabled={createBlogLoading}>{createBlogLoading ? <VscLoading className='loading' /> : BtnText}</button>
        </div>
  )
}

export default BlogInput