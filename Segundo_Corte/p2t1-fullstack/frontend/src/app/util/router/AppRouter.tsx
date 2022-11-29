import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import AuthRouter from "../../public/router/AuthRouter"
import PrivateRouter from "./PrivateRouter"
import ProtectedRouter from "../../protected/router/ProtectedRouter"
import PublicRouter from "./PublicRouter"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={
                    <PublicRouter children={ <AuthRouter /> } />
                } />

                <Route path="/protected/*" element={
                    <PrivateRouter children={ <ProtectedRouter /> } />
                } />

                <Route path="*" element={
                    <Navigate to="/auth/login" replace />
                } />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter