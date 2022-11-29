import './App.css'
import AppRouter from './app/util/router/AppRouter'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'


const App = () => {
    return (
        <>
            <AppRouter />
            <ToastContainer />
        </>
    )
}


export default App
