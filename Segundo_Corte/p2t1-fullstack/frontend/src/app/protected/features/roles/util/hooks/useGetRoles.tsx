import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { GetParamsPropsType } from '../../../../types'
import { getRolesFetch } from '../services'
import { RoleType } from "../types"




export const useGetRoles = ( getParams: GetParamsPropsType, reloadData: Boolean, setReloadData: Dispatch<SetStateAction<boolean>> ) => {
    const [ isFetching, setIsFetching ] = useState( true )
    const [ roles, setRoles ] = useState<RoleType[]>()
    const [ partialCount, setPartialCount ] = useState( 0 )
    const [ totalCount, setTotalCount ] = useState( 0 )


    useEffect( () => {
        getRolesFetch( getParams )
            .then( ( { data: { data, partialCount, totalCount } } ) => {
                setRoles( data )
                setPartialCount( partialCount )
                setTotalCount( totalCount )
            } )
            .catch( error => console.error( { useGetUsersError: error } ) )
            .finally( () => {
                setIsFetching( false )
                setReloadData( false )
            } )
    }, [ getParams, reloadData, setReloadData ] )


    return { isFetching, roles, partialCount, totalCount }
}