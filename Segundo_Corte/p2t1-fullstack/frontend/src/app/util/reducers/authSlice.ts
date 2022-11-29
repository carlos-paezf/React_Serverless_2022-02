import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginAPI } from '../../public/features/login/util/actions/loginActions'
import { SessionStorageService } from '../helpers/storageService/sessionStorage'
import { RootState } from "../store/store"
import type { AuthStateType, AuthValueType } from '../../public/features/login/util/types/authTypes'


const initialState: AuthStateType = {
    value: {
        accessToken: SessionStorageService.getItem( 'accessToken' )?.replace( /"/g, '' ) ?? '',
        user: ( SessionStorageService.getItem( 'user' ) === null ) ? {} : JSON.parse( SessionStorageService.getItem( 'user' ) || '' ),
        logged: Boolean( SessionStorageService.getItem( 'logged' ) ) ?? false,
    },
    status: 'idle'
}


export const authSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        login: ( state, action: PayloadAction<AuthValueType> ) => {
            state.value = action.payload
        },
        logout: ( state ) => {
            state.value = {
                accessToken: '',
                user: {},
                logged: false
            }
            SessionStorageService.clearSessionStorage()
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( loginAPI.pending, ( state ) => {
                state.status = 'loading'
            } )
            .addCase( loginAPI.fulfilled, ( state, { payload: { accessToken, user, logged = true } }: PayloadAction<AuthValueType> ) => {
                state.status = 'idle'
                state.value = { accessToken, user, logged }
            } )
            .addCase( loginAPI.rejected, ( state, { error } ) => {
                console.error( { loginAPIError: { ...error } } )
                state.status = 'failed'
            } )
    }
} )


export const { login, logout } = authSlice.actions


export const selectAuth = ( state: RootState ) => state.auth.value


export default authSlice.reducer