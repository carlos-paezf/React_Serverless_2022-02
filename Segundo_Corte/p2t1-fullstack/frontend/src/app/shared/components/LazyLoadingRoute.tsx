import { Suspense } from "react"

import LoadingComponent from "./LoadingComponent"
import { ZoneRouterType } from "../../util/types/routerType"


const LazyLoadingRoute = ( { children }: ZoneRouterType ) => {
    return (
        <Suspense fallback={ <LoadingComponent /> }>
            { children }
        </Suspense>
    )
}


export default LazyLoadingRoute