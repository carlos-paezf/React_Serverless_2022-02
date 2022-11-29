import { FC } from "react"
import { Navigate } from "react-router-dom"
import { selectAuth } from "../reducers/authSlice"

import { useAppSelector } from "../hooks"
import { ZoneRouterType } from "../types"


const PublicRouter: FC<ZoneRouterType> = ( { children } ) => {
    const { logged } = useAppSelector( selectAuth )

    return logged ? <Navigate to="/protected/dashboard" /> : children
}


export default PublicRouter