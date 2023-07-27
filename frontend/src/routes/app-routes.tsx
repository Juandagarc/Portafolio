import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarMenu from '../components/Navbar/navbar';
import Home from '../Containers/home/home-container';
import Footer from '../components/footer/footer';
import AboutContainer from '../Containers/about-container/about-container';

const AppRoutes = () => {

    return (
        <BrowserRouter>
        <NavbarMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<AboutContainer />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;