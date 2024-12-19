import React, { useEffect, useRef, useState } from "react"
import FilterComponent from "../components/FilterComponent";
// import BlogCard from "../components/ProductCard";
import Loader from "../components/Loader";
import '../styles/blogs.scss';
import { FiSearch } from "react-icons/fi";
import Pagination from "../components/Pagination";
import { useGetBlogsByParamsQuery } from "../redux/api/blogApi";
import Post from "../components/Post";

const Blogs = () => {
  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [sortby, setSortby] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const searchRef = useRef<HTMLInputElement>(null);
  const categoryFilterList = ["malaysia", "bangkok", "singapore", "dubai"];
  const subCategoryFilterList = [
    "solo-travel",
    "family-travel",
    "adventure-travel",
    "luxury-travel",
    "backpacking"
  ];
  
  
  const {data:filteredBlogData, isLoading:filteredBlogLoading} = useGetBlogsByParamsQuery({category,subCategory, search, sortby, page});

  
    const handleClickCategory = (categoryVal:string) => {
      setCategory((prev) => prev === categoryVal ? "" : categoryVal)
    }
  
    const handleClickSubCategory = (subCategoryVal:string) => {
      setSubCategory((prev) => prev === subCategoryVal ? "" : subCategoryVal)
    }

    const handleChangePage = (pageVal:number) => {
      setPage(pageVal)
    }

    
    const handleClearFilter = () => {
      setSearch("")
      setCategory("")
      setSubCategory("")
      setSortby("")
      setPage(1)
    }

    const handleSearch = (e:React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchRef.current) { 
        setSearch(searchRef.current.value)
        setCategory("")
        setSubCategory("")
        setSortby("")
        setPage(1)
      }
    }

    useEffect(() => {
      
    },[category, subCategory, search, sortby])


    if(filteredBlogLoading){
      return <Loader/>
    }

  return (
    <div className="blogs_page_main_container">
        <div className="blogs_page_filters_container">
            {/* Filters */}
            
            <FilterComponent
            category={category}
            categoryFilterList={categoryFilterList}
            handleClickCategory={handleClickCategory}
            subCategory={subCategory}
            subCategoryFilterList={subCategoryFilterList}
            handleClickSubCategory={handleClickSubCategory}
            handleClearFilter={handleClearFilter}
            filteredBlogLoading={filteredBlogLoading}
            search={search}
            sortby={sortby}
            />
        </div>
        <div className="blogs_page_blogs_container">
          <div className="blogs_page_search_sort_container">
            <form className="search_container" onSubmit={handleSearch}>
              <input 
              type="text"
              placeholder="Search...."
              ref={searchRef}
              />
              <button type="submit"><FiSearch /></button>
            </form>
            <div className="sort_container">
              <select
              name="sortby"
              value={sortby}
              onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setSortby(e.target.value)}
              >
                <option value="">Relevant</option>
                <option value="title">A to Z</option>
                <option value="-title">Z to A</option>
              </select>
            </div>

          </div>
            {/* blogs */}
            <div className="blogs_page_product_container">
              {
                filteredBlogData && filteredBlogData.blogs.length > 0 ? filteredBlogData.blogs.map((post) => (
                  <Post key={post.slug} blog={post} />
                )) : <h1>No Blog Found</h1>
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
    </div>
  )
}

export default Blogs