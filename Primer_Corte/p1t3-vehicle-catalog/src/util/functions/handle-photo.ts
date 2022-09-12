import { FormEvent } from 'react';
import { uploadImage } from './upload-image';


/**
 * It takes an event, and a function as arguments, and if the event has a file, it uploads the file,
 * and then calls the function with the event and the uploaded file as arguments.
 * 
 * The function is called like this:
 * 
 * handlePhoto(e, handleChange)
 * 
 * The function handleChange is defined like this:
 * 
 * const handleChange = (e: FormEvent&lt;HTMLInputElement&gt;, image: string) =&gt; {
 *     setForm({
 *         ...form,
 *         [ e.currentTarget.name ]: e.currentTarget.value,
 *         image
 *     })
 * }
 * 
 * The function handleChange is called like this:
 * 
 * handleChange(e, String(decodeImage))
 * 
 * The function handleChange takes an event and a string as arguments,
 * @param e - FormEvent<HTMLInputElement>
 * @param {Function} handleChange - Function =&gt; (e: FormEvent&lt;HTMLInputElement&gt;, value:
 * string) =&gt; void
 * @returns A base64 string
 */
export const handlePhoto = async (e: FormEvent<HTMLInputElement>, handleChange: Function) => {
    if (!e.currentTarget.files?.length) return

    const image = e.currentTarget.files![ 0 ]

    if (!image.type.match(/image\/*/)) {
        alert("Tipo de archivo no permitido")
        return
    }

    const decodeImage = await uploadImage(image)

    handleChange(e, String(decodeImage))
}