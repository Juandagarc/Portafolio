import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarMenu from '../components/Navbar/navbar';
import Home from '../Containers/home/home-container';
import Footer from '../components/footer/footer';

const AppRoutes = () => {

    return (
        <BrowserRouter>
        <NavbarMenu />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;