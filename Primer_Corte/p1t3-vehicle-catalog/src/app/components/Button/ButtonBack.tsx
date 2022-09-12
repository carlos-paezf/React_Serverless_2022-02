import { useNavigate } from 'react-router-dom'


const ButtonBack = () => {
    const navigate = useNavigate()

    /**
     * When the user clicks the back button, navigate to the previous page.
     */
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <button className="btn btn-dark rounded-5" onClick={ handleBack }>
            <i className="fa-solid fa-chevron-left"></i>
        </button>
    )
}


export default ButtonBack