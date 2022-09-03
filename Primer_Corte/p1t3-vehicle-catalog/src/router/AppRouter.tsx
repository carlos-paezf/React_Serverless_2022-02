import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AdminScreen from '../pages/AdminScreen'
import CatalogScreen from '../pages/CatalogScreen'
import CreateScreen from '../pages/CreateScreen'
import DetailScreen from '../pages/DetailScreen'
import HomeScreen from '../pages/HomeScreen'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path="/catalog" element={<CatalogScreen />}>
                    <Route path=':vehicleId' element={<DetailScreen />} />
                </Route>
                <Route path="/admin" element={<AdminScreen />} />
                <Route path="/create" element={<CreateScreen />} />
            </Routes>
        </BrowserRouter >
    )
}


export default AppRouter