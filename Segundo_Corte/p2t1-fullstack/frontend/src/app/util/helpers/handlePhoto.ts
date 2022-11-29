import { FormEvent } from "react"
import { uploadImage } from "./uploadImage"


const MAX_SIZE_BYTES = 1000000


export const handlePhoto = async ( e: FormEvent<HTMLInputElement>, handleChange: Function ) => {
    if ( !e.currentTarget.files?.length ) return

    const image = e.currentTarget.files![ 0 ]

    if ( !image.type.match( /image\/*/ ) ) {
        alert( "Tipo de archivo no permitido" )
        return
    }

    if ( image.size > MAX_SIZE_BYTES ) {
        alert( "Máximo de tamaño excedido" )
        return
    }

    const decodeImage = await uploadImage( image )

    handleChange( e, String( decodeImage ) )
}