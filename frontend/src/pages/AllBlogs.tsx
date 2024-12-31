import React, { useState } from "react";
import { useGetBlogsByParamsQuery } from "../redux/api/blogApi";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import ListBlog from "../components/admin/ListBlog";
import '../styles/allBlogs.scss';

const AllBlogs = () => {
  const [category, setCategory] = useState<string>("");
    const [subCategory, setSubCategory] = useState<string>("");
    const [sortby, setSortby] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const categoryFilterList = ["malaysia", "bangkok", "singapore", "dubai"];
    const subCategoryFilterList = [
      "solo-travel",
      "family-travel",
      "adventure-travel",
      "luxury-travel",
      "backpacking"
    ];

    const {data:filteredBlogData, isLoading:filteredBlogLoading} = useGetBlogsByParamsQuery({category,subCategory, search:undefined, sortby, page});

    const handleChangePage = (pageVal:number) => {
      setPage(pageVal)
    }

      

  if(filteredBlogLoading){
    return <Loader />
  }

  return (
    <div className="all_blogs_main_container">
      <h1>All Blogs</h1>
      <div className="all_blogs_filters">
        <select name="category" value={category} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {
            categoryFilterList.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))
          }
        </select>
        <select name="subCategory" value={subCategory} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setSubCategory(e.target.value)}>
          <option value="">Select Sub Category</option>
          {
            subCategoryFilterList.map((subcat) => (
              <option key={subcat} value={subcat}>{subcat}</option>
            ))
          }
        </select>
        <select name="sortby" value={sortby} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setSortby(e.target.value)}>
          <option value="">Relevant</option>
          <option value="title">A to Z</option>
          <option value="-title">Z to A</option>
          
        </select>
      </div>
      {
        filteredBlogData && filteredBlogData.blogs.length > 0 && <div className="all_blogs_heading_container">
        <p>Image</p>
        <p>Title</p>
        <p>Category</p>
        <p>Sub Category</p>
      </div>
      }
      <div className="all_blogs_filters_container">
          {/* List Blog  */}
          {
            filteredBlogData && filteredBlogData.blogs.length > 0 ? filteredBlogData.blogs.map((blog) => {
              return <ListBlog 
              key={blog._id}
              category={blog.category}
              image={blog.image}
              subCategory={blog.subCategory}
              title={blog.title}
              _id={blog._id}
              />
            }) : <h1>No Blog Found</h1>
          }
      </div>
      {
        filteredBlogData &&(
          <div className="blogs_pagination_container">
            <Pagination
            handleChangePage={handleChangePage}
            totalPage={filteredBlogData.totalPage}
            currentPage={page}
            />
          </div>
        )
      }
    </div>
  )
}

export default AllBlogs