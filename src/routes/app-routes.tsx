import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarMenu from '../components/Navbar/navbar';
import Home from '../Containers/home/home-container';

const AppRoutes = () => {

    return (
        <BrowserRouter>
        <NavbarMenu />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;