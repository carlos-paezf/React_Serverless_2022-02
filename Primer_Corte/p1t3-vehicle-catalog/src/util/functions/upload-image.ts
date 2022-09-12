/**
 * It takes a file, reads it as a data URL, and returns a promise that resolves with the data URL
 * @param {File} image - File - The image file that you want to upload
 * @returns A promise that resolves to a string.
 */
export const uploadImage = async (image: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()

        fileReader.readAsDataURL(image)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}