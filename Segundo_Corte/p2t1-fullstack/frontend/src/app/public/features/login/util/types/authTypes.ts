import { UserType } from "../../../../../protected/features/users/util/types/userType"


export type AuthStateType = {
    value: AuthValueType
    status: 'idle' | 'loading' | 'failed'
}


export type AuthValueType = {
    accessToken: string
    user: UserType | {}
    logged: Boolean
}


export type LoginPropsType = {
    emailOrUsername: string
    password: string
}


export type ModulePermission = {
    moduleId: string
    permissionId: string
}

export interface TokenPayload {
    id: string
    email: string
    username: string
    role: {
        id: string,
        roleName: string,
        deletedAt: Date | null
    }
    modulesPermissions: ModulePermission[]
    exp: number
    iat: number
}