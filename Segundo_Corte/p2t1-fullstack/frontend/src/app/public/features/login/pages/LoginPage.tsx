import { LoginFormComponent } from "../../../components/LoginFormComponent"
import escudoUSTA from '../../../../assets/images/escudo.png'


const LoginPage = () => {
    return (
        <main className="login-page">
            <div className="login-title">
                <img src={ escudoUSTA } alt="Escudo USTA" />
                <h1 className="h3 mb-5 fw-normal">Inicio de Sesión</h1>
            </div>
            <LoginFormComponent />
        </main>
    )
}


export default LoginPage