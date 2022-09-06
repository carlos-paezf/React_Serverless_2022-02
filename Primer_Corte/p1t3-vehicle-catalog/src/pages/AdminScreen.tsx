import Table from "../components/Table/Table"
import Title from "../components/Title"


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