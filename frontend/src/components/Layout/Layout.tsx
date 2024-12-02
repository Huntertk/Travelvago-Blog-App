import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <footer>Footer</footer>
    </>
  )
}

export default Layout