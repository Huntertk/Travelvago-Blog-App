import '../../styles/adminBigSidebar.scss'
import { NavLink } from 'react-router-dom'
import {RiAdminFill} from 'react-icons/ri'
import {VscGraph} from 'react-icons/vsc'
import { BsQrCode } from "react-icons/bs";
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { CiSearch } from "react-icons/ci";
import { MdAccessTime } from 'react-icons/md';

const AdminBigSidebar = () => {
  return (
    <aside className='bigSidebarWrapper'>
      <div className="bigSidebarContainer">
        <h1>Admin <RiAdminFill /></h1>
          <NavLink to="/admin/all-booking"><VscGraph /> All Booking</NavLink>
          <NavLink to="/admin/search"><CiSearch /> Search Booking</NavLink>
          <NavLink to="/admin/manage-dates"><IoCalendarNumberOutline /> Manages Dates</NavLink>
          <NavLink to="/admin/manage-timeslot"><MdAccessTime /> Manages TimeSlot</NavLink>
          <NavLink to="/admin/qr-code"><BsQrCode />Qr Codes</NavLink>
      </div>
    </aside>
  )
}

export default AdminBigSidebar