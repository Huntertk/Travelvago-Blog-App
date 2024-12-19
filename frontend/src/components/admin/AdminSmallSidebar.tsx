import { ImCross } from 'react-icons/im'
import { IoIosAddCircle } from 'react-icons/io'
import { IoAnalytics } from 'react-icons/io5'
import { RiAdminFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import '../../styles/adminSmallSidebar.scss'
import { FaListCheck } from 'react-icons/fa6'

type TypeAdminSmallSidebarProps = {
    toggleSidebarHandler:(value:boolean) => void
}

const AdminSmallSidebar = ({toggleSidebarHandler}:TypeAdminSmallSidebarProps) => {
  return (
    <div className='smallSidebarWrapper'>
      <div className="smallSidebarContainer">
        <h1>Dashboard <RiAdminFill /></h1>
        <ImCross className='crossIcon' onClick={() => toggleSidebarHandler(false)}/>
          <NavLink 
          to="/admin/dashboard"
          onClick={() => toggleSidebarHandler(false)}
          ><IoAnalytics /> Dashboard</NavLink>

          <NavLink 
          to="/admin/all-blogs"
          onClick={() => toggleSidebarHandler(false)}
          ><FaListCheck /> All Blogs</NavLink>

          <NavLink 
          to="/admin/add-new-blog"
          onClick={() => toggleSidebarHandler(false)}
          ><IoIosAddCircle /> Add New Blog</NavLink>
      </div>
    </div>
  )
}

export default AdminSmallSidebar