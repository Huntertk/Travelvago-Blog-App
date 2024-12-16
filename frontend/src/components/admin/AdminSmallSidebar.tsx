import '../../styles/adminSmallSidebar.scss'
import { NavLink } from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import {RiAdminFill} from 'react-icons/ri'
import {VscGraph} from 'react-icons/vsc'
import { BsQrCode } from "react-icons/bs";
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { MdAccessTime } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'

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
          to="/admin/all-booking"
          onClick={() => toggleSidebarHandler(false)}
          ><VscGraph /> All Booking</NavLink>

          <NavLink 
          to="/admin/search"
          onClick={() => toggleSidebarHandler(false)}
          ><CiSearch /> Search Booking</NavLink>

          <NavLink to="/admin/manage-dates"
           onClick={() => toggleSidebarHandler(false)}
          ><IoCalendarNumberOutline /> Manages Dates</NavLink>

          <NavLink to="/admin/manage-timeslot"
           onClick={() => toggleSidebarHandler(false)}
          ><MdAccessTime /> Manages Timeslot</NavLink>

          <NavLink to="/admin/qr-code"
          onClick={() => toggleSidebarHandler(false)}
          ><BsQrCode /> Qr Codes</NavLink>
      </div>
    </div>
  )
}

export default AdminSmallSidebar