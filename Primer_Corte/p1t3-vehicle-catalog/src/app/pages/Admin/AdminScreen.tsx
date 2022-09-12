import Table from "./Table"
import Title from "../../components/Tittle/Title"


const AdminScreen = () => {
    return (
        <>
            <Title title="Administración de catalogo" />

            <div className="container" style={ { overflowX: "scroll" } }>
                <Table />
            </div>
        </>
    )
}


export default AdminScreen