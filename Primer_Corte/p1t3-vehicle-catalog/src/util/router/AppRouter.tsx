import { BrowserRouter, Route, Routes } from "react-router-dom"

import AdminScreen from "../../app/pages/Admin/AdminScreen"
import CatalogScreen from "../../app/pages/Catalog/CatalogScreen"
import CreateScreen from "../../app/pages/Create/CreateScreen"
import DetailScreen from "../../app/pages/Detail/DetailScreen"
import EditScreen from "../../app/pages/Edit/EditScreen"
import Footer from "../../app/components/Footer/Footer"
import HomeScreen from "../../app/pages/HomeScreen"
import Navbar from "../../app/components/Navbar/Navbar"
import NotFoundScreen from "../../app/pages/NotFoundScreen"



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={ <HomeScreen /> } />
                <Route path="/catalog" element={ <CatalogScreen /> } />
                <Route path='/catalog/:vehicleId' element={ <DetailScreen /> } />
                <Route path="/admin" element={ <AdminScreen /> } />
                <Route path="/create" element={ <CreateScreen /> } />
                <Route path="/edit/:vehicleId" element={ <EditScreen /> } />
                <Route path="*" element={ <NotFoundScreen /> } />
            </Routes>
            <Footer />
        </BrowserRouter >
    )
}


export default AppRouter