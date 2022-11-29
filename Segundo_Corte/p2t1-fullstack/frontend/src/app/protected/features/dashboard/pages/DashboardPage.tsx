const DashboardPage = () => {
    return (
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">ACTFIS</h1>
                <h1 className="display-5 fw-bold text-white">Actas de la facultad de Ingeniería de Sistemas</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">
                        Esta aplicación se está presentando para la clase de REACT Serverless, pero se pretenden avanzar en el mismo como proyecto destinado para la facultad.
                        Inicialmente sus estilos son extraídos de Bootstrap, pero se pretende personalizar su interfaz.
                    </p>
                    <p className="fs-5 mb-4">
                        Actualmente esta aplicación se está ejecutando con las siguientes dependencias:
                    </p>
                    <code className="y-3">
                        "@fortawesome/fontawesome-free": "^6.2.0",
                        "@redux-devtools/extension": "^3.2.3",
                        "@reduxjs/toolkit": "^1.8.6",
                        "@testing-library/jest-dom": "^5.16.5",
                        "@testing-library/react": "^13.4.0",
                        "@testing-library/user-event": "^14.4.3",
                        "@types/jest": "^27.5.2",
                        "@types/node": "^17.0.45",
                        "@types/react": "^18.0.21",
                        "@types/react-dom": "^18.0.6",
                        "axios": "^1.1.3",
                        "bootstrap": "5.2.2",
                        "jwt-decode": "^3.1.2",
                        "react": "^18.2.0",
                        "react-dom": "^18.2.0",
                        "react-redux": "^8.0.4",
                        "react-router-dom": "6",
                        "react-scripts": "5.0.1",
                        "react-toastify": "^9.0.8",
                        "redux-thunk": "^2.4.1",
                        "sass": "^1.55.0",
                        "typescript": "^4.8.4",
                        "web-vitals": "^2.1.4"
                    </code>
                </div>
            </div>
        </div>
    )
}


export default DashboardPage