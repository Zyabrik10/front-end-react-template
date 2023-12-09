import { Header, Footer } from "components/index"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
    return <>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}