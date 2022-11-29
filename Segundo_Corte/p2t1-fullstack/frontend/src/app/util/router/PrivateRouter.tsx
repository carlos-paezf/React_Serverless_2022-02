import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { selectAuth } from '../reducers/authSlice'

import { useAppSelector } from "../hooks"
import { ZoneRouterType } from '../types'


const PrivateRouter: FC<ZoneRouterType> = ( { children } ) => {
    const { logged } = useAppSelector( selectAuth )

    return ( logged ) ? children : <Navigate to="/auth/login" />
}


export default PrivateRouter