import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateType } from "../../../types"
import { RoleType } from "../util/types"
import { RootState } from '../../../../util/store/store'
import { getRolesAPI, getRoleByIdAPI, createRoleAPI, updateRoleAPI, disabledRoleAPI, restoreRoleAPI, deleteRoleAPI } from '../util/actions/roleActions'


const initialState: StateType<RoleType> = {
    selectedItem: {} as RoleType,
    status: 'idle'
}


export const rolesSlice = createSlice( {
    name: 'role',
    initialState,
    reducers: {
        cleanSelectedRole: ( state ) => {
            state.selectedItem = {} as RoleType
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase(
                ( getRolesAPI.pending || getRoleByIdAPI.pending || createRoleAPI.pending || updateRoleAPI.pending || disabledRoleAPI.pending || restoreRoleAPI.pending || deleteRoleAPI.pending ),
                ( state ) => {
                    state.status = 'loading'
                } )
            .addCase(
                ( getRolesAPI.rejected || getRoleByIdAPI.rejected || createRoleAPI.rejected || updateRoleAPI.rejected || disabledRoleAPI.rejected || restoreRoleAPI.rejected || deleteRoleAPI.rejected ),
                ( state, error ) => {
                    console.error( { roleReducerError: { ...error } } )
                    state.status = 'failed'
                } )
            .addCase(
                ( getRoleByIdAPI.fulfilled || createRoleAPI.fulfilled ),
                ( state, { payload }: PayloadAction<RoleType> ) => {
                    state.status = 'idle'
                    state.selectedItem = payload as RoleType
                } )
            .addCase(
                ( getRolesAPI.fulfilled || updateRoleAPI.fulfilled || disabledRoleAPI.fulfilled || restoreRoleAPI.fulfilled || deleteRoleAPI.fulfilled ),
                ( state ) => {
                    state.status = 'idle'
                } )
    }
} )


export const { cleanSelectedRole } = rolesSlice.actions


export const selectedRole = ( state: RootState ) => state.roles.selectedItem


export default rolesSlice.reducer