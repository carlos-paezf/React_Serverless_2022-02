import { useNavigate } from 'react-router-dom'


const BackButton = () => {
    const navigate = useNavigate()

    return <button onClick={ () => navigate( -1 ) }>Regresar a la página anterior</button>
}


export default BackButton