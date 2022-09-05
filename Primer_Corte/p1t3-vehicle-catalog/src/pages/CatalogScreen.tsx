import Loading from '../components/Loading';
import Title from '../components/Title';
import VehicleCard from '../components/VehicleCard';
import { useGetVehicles } from '../hooks/useGetVehicles';


const CatalogScreen = () => {
    const { data, isFetching } = useGetVehicles()

    return (
        <>
            <Title title="Catalogo de Vehículos" />

            {
                isFetching
                    ? <Loading />
                    : <div className="d-flex container mt-1 mx-auto row">
                        {
                            data.map(
                                (vehicle) =>
                                    <div className='col-12 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3' key={ vehicle.code }>
                                        <VehicleCard { ...vehicle } key={ vehicle.code } />
                                    </div>
                            )
                        }
                    </div>
            }
        </>
    )
}


export default CatalogScreen