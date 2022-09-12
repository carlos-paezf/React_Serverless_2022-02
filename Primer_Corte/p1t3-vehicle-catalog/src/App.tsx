import AppRouter from './util/router/AppRouter';

import { VehicleContextProvider } from './util/context/VehicleContext';


const App = () => {
    return (
        <VehicleContextProvider>
            <AppRouter />
        </VehicleContextProvider>
    )
}


export default App;
