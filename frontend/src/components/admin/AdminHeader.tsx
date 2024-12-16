import '../../styles/adminHeader.scss' 
import {BiAlignLeft} from 'react-icons/bi'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { useAppSelector } from '../../redux/hooks';
import { useLazyLogoutQuery } from '../../redux/api/authApi';

type TypeAdminHeaderProps = {
  toggleSidebarHandler:(value:boolean) => void
}
 
const AdminHeader = ({toggleSidebarHandler}:TypeAdminHeaderProps) => {
    const {email} = useAppSelector((state) => state.admin);
    const [logout, {data}] = useLazyLogoutQuery()
    const navigate = useNavigate();

    useEffect(() => {
      if(data){
        navigate(0);
      }

    }, [data])
  return (
    <div id='adminHeaderMainContainer'>
        <div className="adminHeaderWrapper">
            <BiAlignLeft className='alignLeft' onClick={() => toggleSidebarHandler(true)} />
            <h1>Dashboard</h1>
            <ul>
                <li className='adminEmail'>{email} </li>
                <li onClick={() => logout({})}><IoLogOut /></li>
            </ul>
        </div>
    </div>
  )
}

export default AdminHeader