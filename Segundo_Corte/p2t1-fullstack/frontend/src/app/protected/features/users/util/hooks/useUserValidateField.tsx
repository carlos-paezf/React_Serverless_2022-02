import { useEffect, useState, useCallback } from 'react'
import { authBaseURL } from "../../../../../util/helpers"


/**
 * It takes a key and a value, and returns a boolean value that indicates whether the value is unique
 * or not.
 * @param {string} key - string - the key of the field you want to validate
 * @param {string} value - string - the value of the field to be validated
 * @returns An array of three values.
 */
export const useUserValidateField = ( key: string, value: string ) => {
    const [ uniqueElement, setUniqueElement ] = useState( true )
    const [ isLoading, setIsLoading ] = useState( true )
    const [ error, setError ] = useState()

    const fetchValue = useCallback(
        async () => {
            await authBaseURL.get(
                `validate?${ key }=${ value }`
            )
                .then( res => setUniqueElement( res.data.data.isUnique ) )
                .catch( err => setError( err ) )
                .finally( () => setIsLoading( false ) )
        },
        [ key, value ],
    )


    useEffect( () => { fetchValue() }, [ fetchValue ] )

    return [ uniqueElement, isLoading, error ]
}