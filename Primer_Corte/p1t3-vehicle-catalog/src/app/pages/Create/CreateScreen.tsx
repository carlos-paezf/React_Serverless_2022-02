import FormCreateVehicle from './FormCreateVehicle';
import Title from '../../components/Tittle/Title';


const CreateScreen = () => {
    return (
        <>
            <Title title="Añadir nuevo vehículo al catalogo" />

            <FormCreateVehicle />
        </>
    )
}


export default CreateScreen