import '../../styles/adminBigSidebar.scss'
import { NavLink } from 'react-router-dom'
import {RiAdminFill} from 'react-icons/ri'
import { IoIosAddCircle } from "react-icons/io";
import { IoAnalytics } from 'react-icons/io5';
const AdminBigSidebar = () => {
  return (
    <aside className='bigSidebarWrapper'>
      <div className="bigSidebarContainer">
        <h1>Admin <RiAdminFill /></h1>
          <NavLink to="/admin/dashboard"><IoAnalytics /> Dashboard</NavLink>
          <NavLink to="/admin/add-new-blog"><IoIosAddCircle /> Add New Blog</NavLink>
      </div>
    </aside>
  )
}

export default AdminBigSidebar