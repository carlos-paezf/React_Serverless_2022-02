import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginFetch } from "../../../../../util/helpers"
import { SessionStorageService } from "../../../../../util/helpers/storageService/sessionStorage"
import { types } from "../../../../../util/types"
import { LoginPropsType } from "../types/authTypes"


export const loginAPI = createAsyncThunk(
    types.login,
    async ( loginProps: LoginPropsType ) => {
        const { data } = await loginFetch( loginProps )

        // const { profileImage, ...rest } = data.user

        SessionStorageService.setItem( 'accessToken', data.accessToken )
        // SessionStorageService.setItem( 'user', { ...rest } )
        SessionStorageService.setItem( 'user', data.user )
        SessionStorageService.setItem( 'logged', true )
        window.location.reload()

        return data
    }
)