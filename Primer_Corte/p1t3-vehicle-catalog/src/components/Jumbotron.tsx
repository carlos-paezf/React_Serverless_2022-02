import { useNavigate } from 'react-router-dom'


const Jumbotron = () => {
    const navigate = useNavigate()

    const handleCatalog = () => {
        navigate(`/catalog`)
    }

    return (
        <div className="p-5 m-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Gama Ferrari</h1>
                <p className="col-md-8 fs-4">Catalogo de Vehículos. Exposición de vehículos marca Ferrari modelos 2022</p>
                <button className="btn btn-dark btn-lg" type="button" onClick={handleCatalog}>Ir al catalogo de vehículos</button>
            </div>
        </div>
    )
}


export default Jumbotron