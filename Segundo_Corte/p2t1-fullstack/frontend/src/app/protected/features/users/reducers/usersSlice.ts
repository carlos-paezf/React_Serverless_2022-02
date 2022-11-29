import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createUserAPI, deleteUserAPI, disabledUserAPI, getUserByIdAPI, getUsersAPI, restoreUserAPI, updateUserAPI } from '../util/actions/userActions'
import { RootState } from "../../../../util/store/store"
import { UserType } from '../util/types/userType'
import { StateType } from '../../../types'


const initialState: StateType<UserType> = {
    selectedItem: {} as UserType,
    status: 'idle'
}


export const usersSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        cleanSelectedUser: ( state ) => {
            state.selectedItem = {} as UserType
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase(
                ( getUsersAPI.pending || getUserByIdAPI.pending || createUserAPI.pending || updateUserAPI.pending || disabledUserAPI.pending || restoreUserAPI.pending || deleteUserAPI.pending ),
                ( state ) => {
                    state.status = 'loading'
                } )
            .addCase(
                ( getUsersAPI.rejected || getUserByIdAPI.rejected || createUserAPI.rejected || updateUserAPI.rejected || disabledUserAPI.rejected || restoreUserAPI.pending || deleteUserAPI.pending ),
                ( state, error ) => {
                    console.error( { userReducerError: { ...error } } )
                    state.status = 'failed'
                } )
            .addCase(
                ( getUserByIdAPI.fulfilled ),
                ( state, { payload }: PayloadAction<UserType> ) => {
                    state.status = 'idle'
                    state.selectedItem = payload as UserType
                } )
            .addCase(
                ( createUserAPI.fulfilled ),
                ( state, { payload }: PayloadAction<UserType> ) => {
                    state.status = 'idle'
                    state.selectedItem = payload
                } )
            .addCase(
                ( getUsersAPI.fulfilled || updateUserAPI.fulfilled || disabledUserAPI.fulfilled || restoreUserAPI.fulfilled || deleteUserAPI.fulfilled ),
                ( state ) => {
                    state.status = 'idle'
                } )
    }
} )

export const { cleanSelectedUser } = usersSlice.actions


export const userList = ( state: RootState ) => state.users.value
export const selectedUser = ( state: RootState ) => state.users.selectedItem


export default usersSlice.reducer