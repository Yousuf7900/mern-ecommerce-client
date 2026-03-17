import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <nav>
                <NavBar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Layout;