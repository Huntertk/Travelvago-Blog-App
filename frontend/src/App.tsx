import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const Layout = lazy(() => import('./components/Layout/Layout'))
const Loader = lazy(() => import('./components/Loader'))
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'))
// const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const Login = lazy(() => import('./pages/Login'))
const AddNewBlog = lazy(() => import('./pages/AddNewBlog'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
      <Toaster  position="top-right" />
        <Routes>
         <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/blog" element={<Blog />}/>
         </Route>

          {/*Admin Routes */}
         <Route path="/admin/login" element={<Login />}/>
         <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
            <Route path="/admin/add-new-blog" element={<AddNewBlog/>} />
          </Route>
         </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App