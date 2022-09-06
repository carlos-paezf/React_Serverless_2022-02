import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import AdminScreen from '../pages/AdminScreen'
import CatalogScreen from '../pages/CatalogScreen'
import CreateScreen from '../pages/CreateScreen'
import DetailScreen from '../pages/DetailScreen'
import EditScreen from '../pages/EditScreen'
import HomeScreen from '../pages/HomeScreen'
import NotFoundScreen from '../pages/NotFoundScreen'


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