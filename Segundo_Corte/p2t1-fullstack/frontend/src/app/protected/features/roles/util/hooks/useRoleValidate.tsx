import { useCallback, useEffect, useState } from "react"
import { APIBaseURL } from "../../../../../util/helpers"

export const useRoleValidate = ( roleName: string ) => {
    const [ uniqueElement, setUniqueElement ] = useState( true )
    const [ isLoading, setIsLoading ] = useState( true )
    const [ error, setError ] = useState()

    const fetchValue = useCallback(
        async () => {
            await APIBaseURL.get(
                `roles/validate?roleName=${ roleName }`
            )
                .then( res => setUniqueElement( res.data.data.isUnique ) )
                .catch( err => setError( err ) )
                .finally( () => setIsLoading( false ) )
        },
        [ roleName ],
    )


    useEffect( () => { fetchValue() }, [ fetchValue ] )

    return [ uniqueElement, isLoading, error ]
}