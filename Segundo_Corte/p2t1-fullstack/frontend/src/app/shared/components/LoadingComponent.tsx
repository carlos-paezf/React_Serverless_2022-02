import logoUSTA from '../../assets/images/escudo.png'


const LoadingComponent = () => {
    return (
        <div className="loading-component">
            <img src={ logoUSTA } alt="Logo USTA" />
            <h1>Cargando...</h1>
        </div>
    )
}


export default LoadingComponent