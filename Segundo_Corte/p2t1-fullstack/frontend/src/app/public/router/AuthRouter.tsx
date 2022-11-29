import { lazy } from 'react'
import { Route, Routes } from "react-router-dom"

import LazyLoadingRoute from '../../shared/components/LazyLoadingRoute'

const LoginPage = lazy( () => import( '../features/login/pages/LoginPage' ) )
const RegisterPage = lazy( () => import( "../features/register/pages/RegisterPage" ) )
const NotFound404 = lazy( () => import( '../../shared/pages/NotFound404' ) )


const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={
                <LazyLoadingRoute children={ <LoginPage /> } />
            } />

            <Route path="/register" element={
                <LazyLoadingRoute children={ <RegisterPage /> } />
            } />

            <Route path="*" element={
                <LazyLoadingRoute children={ <NotFound404 /> } />
            } />
        </Routes>
    )
}


export default AuthRouter