import { useGetVehicles } from '../../hooks/useGetVehicles';
import ItemTable from './ItemTable';
import TablePlaceholderSkeleton from './TablePlaceholderSkeleton';


const Table = () => {
    const { data, isFetching } = useGetVehicles()

    return (
        <table className='table table-hover'>
            <thead>
                <tr className='placeholder-wave'>
                    <th>Código Parcial</th>
                    <th>Modelo</th>
                    <th>Logo</th>
                    <th>Licencia</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    isFetching
                        ? <TablePlaceholderSkeleton />
                        : data.map(
                            ({ code, ...rest }) => <ItemTable code={ code } { ...rest } key={ code } />
                        )
                }
            </tbody>
        </table >
    )
}


export default Table