import { Outlet } from 'react-router-dom'
import Loader from '../components/Loader'
import { useGetMeDataQuery } from '../redux/api/authApi'

const ProtectedRoute = () => {
  const {data, isLoading} = useGetMeDataQuery({})

  if(isLoading){
    return <Loader />
  }

  return data ? <Outlet /> : window.location.href = "/"
}

export default ProtectedRoute