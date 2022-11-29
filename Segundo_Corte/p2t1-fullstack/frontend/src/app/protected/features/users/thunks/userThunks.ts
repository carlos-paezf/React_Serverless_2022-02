import { createUserAPI, updateUserAPI } from "../util/actions/userActions"
import { AppThunk } from "../../../../util/store/store"
import type { UpdateUserPropsType, UserFormPropsType } from "../util/types"
import { cleanSelectedUser } from "../reducers/usersSlice"


export const createUserThunk =
    ( createUserProps: UserFormPropsType ): AppThunk =>
        ( dispatch ) => {
            dispatch( createUserAPI( createUserProps ) )
            dispatch( cleanSelectedUser() )
        }


export const updateUserThunk =
    ( updateUserProps: UpdateUserPropsType ): AppThunk =>
        ( dispatch ) => {
            dispatch( updateUserAPI( updateUserProps ) )
            dispatch( cleanSelectedUser() )
        }