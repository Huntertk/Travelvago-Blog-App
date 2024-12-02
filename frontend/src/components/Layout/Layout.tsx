import { Outlet } from "react-router-dom";
import Header from "./Header";
import '../../styles/homeLayout.scss';

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