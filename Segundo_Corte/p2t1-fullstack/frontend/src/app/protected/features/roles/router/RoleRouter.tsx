import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingComponent from '../../../../shared/components/LoadingComponent'
import RoleEditPage from '../pages/RoleEditPage'

const RolePage = lazy( () => import( "../pages/RolePage" ) )
const RoleCreatePage = lazy( () => import( '../pages/RoleCreatePage' ) )


const RoleRouter = () => {
    return (
        <div className="my-3 mx-5">
            <Routes>
                <Route path="/" element={
                    <Suspense fallback={ <LoadingComponent /> }>
                        <RolePage />
                    </Suspense>
                } />

                <Route path="/create-role" element={
                    <Suspense fallback={ <LoadingComponent /> }>
                        <RoleCreatePage />
                    </Suspense>
                } />

                <Route path="/edit-role/:idRole" element={
                    <Suspense fallback={ <LoadingComponent /> }>
                        <RoleEditPage />
                    </Suspense>
                } />
            </Routes>
        </div>
    )
}


export default RoleRouter