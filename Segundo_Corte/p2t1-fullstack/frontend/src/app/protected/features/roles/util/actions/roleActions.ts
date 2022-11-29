import { createAsyncThunk } from "@reduxjs/toolkit"
import { types } from "../../../../../util/types"
import { GetByIdParamsPropsType, GetParamsPropsType } from "../../../../types"

import { createRoleFetch, deleteRoleFetch, disabledRoleFetch, getRoleByIdFetch, getRolesFetch, restoreRoleFetch, updateRoleFetch } from "../services"
import type { RoleFormPropsType } from "../types"


export const getRolesAPI = createAsyncThunk(
    types.getRoles,
    async ( getParamsProps?: GetParamsPropsType ) => {
        const { data } = await getRolesFetch( getParamsProps )
        return data
    }
)


export const getRoleByIdAPI = createAsyncThunk(
    types.getRoleById,
    async ( { id, includeDeleted = true }: GetByIdParamsPropsType ) => {
        const { data } = await getRoleByIdFetch( { id, includeDeleted } )
        return data
    }
)


export const createRoleAPI = createAsyncThunk(
    types.createRole,
    async ( createRoleProps: RoleFormPropsType ) => {
        const { data } = await createRoleFetch( createRoleProps )
        return data
    }
)


export const updateRoleAPI = createAsyncThunk(
    types.updateRole,
    async ( updateRoleProps: RoleFormPropsType ) => {
        const { data } = await updateRoleFetch( updateRoleProps )
        return data
    }
)


export const disabledRoleAPI = createAsyncThunk(
    types.disabledRole,
    async ( idRole: string ) => {
        const { data } = await disabledRoleFetch( idRole )
        return data
    }
)


export const restoreRoleAPI = createAsyncThunk(
    types.restoreRole,
    async ( idRole: string ) => {
        const { data } = await restoreRoleFetch( idRole )
        return data
    }
)


export const deleteRoleAPI = createAsyncThunk(
    types.destroyRole,
    async ( idRole: string ) => {
        const { data } = await deleteRoleFetch( idRole )
        return data
    }
)