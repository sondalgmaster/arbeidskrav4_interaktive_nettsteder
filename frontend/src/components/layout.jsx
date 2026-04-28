import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
    return(
        <>
            <Header />
            <main>
            <Outlet />
            </main>
            <footer>
                <p>Gruppe UIN26_18</p>
            </footer>

        </>
    )
}

