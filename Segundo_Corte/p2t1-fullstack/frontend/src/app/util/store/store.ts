import { configureStore, ThunkAction, Action, compose, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authSlice'
import usersReducer from '../../protected/features/users/reducers/usersSlice'
import rolesReducer from '../../protected/features/roles/reducers/rolesSlice'


const composeEnhancers = ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = configureStore( {
    reducer: {
        auth: authReducer,
        users: usersReducer,
        roles: rolesReducer
    },
    devTools: composeEnhancers( applyMiddleware( thunk ) )
} )


export type AppDispatch = typeof store.dispatch


export type RootState = ReturnType<typeof store.getState>


export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
