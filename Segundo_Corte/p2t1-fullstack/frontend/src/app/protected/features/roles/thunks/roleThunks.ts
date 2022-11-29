import { AppThunk } from "../../../../util/store/store"
import type { RoleFormPropsType } from "../util/types"
import { createRoleAPI, updateRoleAPI } from '../util/actions/roleActions'
import { cleanSelectedRole } from "../reducers/rolesSlice"


/**
 * This function takes a RoleFormPropsType and returns a function that takes a dispatch and returns a
 * function that dispatches a createRoleAPI and cleanSelectedRole.
 * @param {RoleFormPropsType} createRoleProps - RoleFormPropsType
 */
export const createRoleThunk =
    ( createRoleProps: RoleFormPropsType ): AppThunk =>
        ( dispatch ) => {
            dispatch( createRoleAPI( createRoleProps ) )
            dispatch( cleanSelectedRole() )
        }


/**
 * This function takes a RoleFormPropsType and returns a function that takes a dispatch and returns a
 * function that dispatches an updateRoleAPI action and a cleanSelectedRole action.
 * @param {RoleFormPropsType} updateRoleProps - RoleFormPropsType
 */
export const updateRoleThunk =
    ( updateRoleProps: RoleFormPropsType ): AppThunk =>
        ( dispatch ) => {
            dispatch( updateRoleAPI( updateRoleProps ) )
            dispatch( cleanSelectedRole() )
        }