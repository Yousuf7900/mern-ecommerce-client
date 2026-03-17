import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <nav>
                <NavBar></NavBar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </section>
    );
};

export default Layout;