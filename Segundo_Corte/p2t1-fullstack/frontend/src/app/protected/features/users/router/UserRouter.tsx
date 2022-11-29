import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import LoadingComponent from "../../../../shared/components/LoadingComponent"

const UserCreatePage = lazy( () => import( "../pages/UserCreatePage" ) )
const UserEditPage = lazy( () => import( "../pages/UserEditPage" ) )
const UserPage = lazy( () => import( "../pages/UsersPage" ) )


const UserRouter = () => {
    return (
        <div className="my-3 mx-5">
            <Routes>
                <Route path="/" element={
                    <Suspense fallback={ <LoadingComponent /> }>
                        <UserPage />
                    </Suspense>
                } />

                <Route path="/create-user" element={
                    <Suspense fallback={ <LoadingComponent /> }>
                        <UserCreatePage />
                    </Suspense>
                } />

                <Route path="/edit-user/:idUser" element={
                    <Suspense fallback={ <LoadingComponent /> }>
                        <UserEditPage />
                    </Suspense>
                } />
            </Routes>
        </div>
    )
}


export default UserRouter