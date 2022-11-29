import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { GetParamsPropsType } from '../../../../types'
import { getUsersFetch } from '../services'
import { UserType } from "../types"



/**
 * "It fetches data from an API and returns the data and some other stuff."
 * 
 * I'm trying to write a test for this function
 * @param {GetParamsPropsType} getParams - GetParamsPropsType
 * @param {Boolean} reloadData - Boolean
 * @param {any} setReloadData - Boolean
 * @returns An object with the following properties:
 * isFetching: Boolean
 * users: UserType[]
 * partialCount: number
 * totalCount: number
 */
export const useGetUsers = ( getParams: GetParamsPropsType, reloadData: Boolean, setReloadData: Dispatch<SetStateAction<boolean>> ) => {
    const [ isFetching, setIsFetching ] = useState( true )
    const [ users, setUsers ] = useState<UserType[]>()
    const [ partialCount, setPartialCount ] = useState( 0 )
    const [ totalCount, setTotalCount ] = useState( 0 )


    useEffect( () => {
        getUsersFetch( getParams )
            .then( ( { data: { data, partialCount, totalCount } } ) => {
                setUsers( data )
                setPartialCount( partialCount )
                setTotalCount( totalCount )
            } )
            .catch( error => console.error( { useGetUsersError: error } ) )
            .finally( () => {
                setIsFetching( false )
                setReloadData( false )
            } )
    }, [ getParams, reloadData, setReloadData ] )


    return { isFetching, users, partialCount, totalCount }
}