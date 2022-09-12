const Loading = () => {
    return (
        <div className="d-flex container my-5 align-items-center">
            <strong>Loading...</strong>

            <div className="ms-auto" role="status" aria-hidden="true">
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}


export default Loading