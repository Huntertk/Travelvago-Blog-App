import { useNavigate } from 'react-router-dom';
import '../../styles/listBlog.scss';

type TypeListBlogProps = {
    image:string;
    title:string;
    category:string;
    subCategory:string;
    _id:string;
}

const ListBlog = ({category,image,subCategory,title, _id}:TypeListBlogProps) => {
    const navigate = useNavigate();
  return (
    <div className="list_blog_container">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{subCategory}</p>
        <button onClick={() =>{console.log("delete")}}>Delete</button>
        <button onClick={() => navigate(`/admin/blogs/edit/${_id}`)}>Edit</button>
    </div>
  )
}

export default ListBlog