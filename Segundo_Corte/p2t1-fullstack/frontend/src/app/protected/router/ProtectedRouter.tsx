import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

import { NavComponent } from "../components"
import LazyLoadingRoute from "../../shared/components/LazyLoadingRoute"
import RoleRouter from "../features/roles/router/RoleRouter"

const DashboardPage = lazy( () => import( '../features/dashboard/pages/DashboardPage' ) )
const UserRouter = lazy( () => import( "../features/users/router/UserRouter" ) )
const NotFound404 = lazy( () => import( '../../shared/pages/NotFound404' ) )


const ProtectedRouter = () => {
    return (
        <>
            <NavComponent />

            <Routes>
                <Route path="/dashboard" element={
                    <LazyLoadingRoute children={ <DashboardPage /> } />
                } />

                <Route path="/users/*" element={
                    <LazyLoadingRoute children={ <UserRouter /> } />
                } />

                <Route path="/roles/*" element={
                    <LazyLoadingRoute children={ <RoleRouter /> } />
                } />

                <Route path="*" element={
                    <LazyLoadingRoute children={ <NotFound404 /> } />
                } />
            </Routes>
        </>
    )
}


export default ProtectedRouter