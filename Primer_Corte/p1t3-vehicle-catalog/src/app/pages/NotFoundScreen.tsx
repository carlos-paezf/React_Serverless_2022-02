import Error404 from '../assets/Error404.png'
import ButtonNavigate from '../components/Button/ButtonNavigate'


const NotFoundScreen = () => {
    return (

        <div className="card text-center">
            <div className="card-header">
                Página no encontrada
            </div>
            <div className="card-body">
                <div className='w-100'>
                    <img className='not-found' src={ Error404 } alt="Error404" width="500px" />
                </div>
                <h5 className="card-title">La página que buscabas no ha sido encontrada</h5>
                <p className="card-text">Revisa la dirección que ingresaste, o regresa a la página principal</p>
                <ButtonNavigate navigateUrl='/' text='Ir a la página de Inicio' />
            </div>
        </div>
    )
}


export default NotFoundScreen