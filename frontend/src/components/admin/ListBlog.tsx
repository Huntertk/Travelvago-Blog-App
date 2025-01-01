import { useNavigate } from 'react-router-dom';
import '../../styles/listBlog.scss';
import { useDeleteBlogMutation } from '../../redux/api/blogApi';
import { useEffect } from 'react';
import { VscLoading } from 'react-icons/vsc';
import toast from 'react-hot-toast';

type TypeListBlogProps = {
    image:string;
    title:string;
    category:string;
    subCategory:string;
    _id:string;
}

const ListBlog = ({category,image,subCategory,title, _id}:TypeListBlogProps) => {
    const [deleteBlog, {data:deleteBlogData, isLoading: deleteBlogLoading, error:deleteBlogError}] = useDeleteBlogMutation();

    const navigate = useNavigate();

    useEffect(() => {
      
      if(deleteBlogData){
        navigate(0);
      }

      if(deleteBlogError){
          if ('data' in deleteBlogError) {
            toast.error(`${deleteBlogError.data}`);
          }
        }
    

    }, [deleteBlogData])

  return (
    <div className="list_blog_container">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{subCategory}</p>
        <button onClick={() => deleteBlog({blogId:_id})} disabled={deleteBlogLoading}>{deleteBlogLoading ? <VscLoading className='loading' /> : "Delete"}</button>
        <button onClick={() => navigate(`/admin/blog/edit/${_id}`)}>Edit</button>
    </div>
  )
}

export default ListBlog