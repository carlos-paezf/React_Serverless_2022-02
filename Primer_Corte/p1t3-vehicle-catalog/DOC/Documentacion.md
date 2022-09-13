# Documentación [Catalogo de Vehículos (Ferrari)](https://react-serverles-vehicle-catalog.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/440c0c98-f4d3-4c95-9cc8-aca4786d2dbd/deploy-status)](https://app.netlify.com/sites/react-serverles-vehicle-catalog/deploys)

## Inicio del proyecto

El proyecto se creo con el siguiente comando:

```txt
pnpm create react-app p1t3-vehicle-catalog --template typescript
```

Para reducir el espacio que ocupan las dependencias, elimine el archivo `package-lock.json` y el directorio `node_modules`, para luego reinstalar los paquetes con el comando a continuación (algunas dependencias que estaban perdidas, fueron instaladas manualmente):

```txt
pnpm install
```

## Scaffolding

El proyecto lo vamos a estructurar de la siguiente manera:

```txt
- src
    - app
        - components
        - pages
    - assets
    - services
    - util
        - actions
        - context
        - functions
        - hooks
        - mocks
        - reducers
        - router
        - types
    App.tsx
    index.css
    index.tsx
```

## Tipos

Creamos una estructura que se encarga de tipar los objetos con la información de los vehículos. Lo acompaña un enum para establecer algunos valores por defecto en la propiedad de los modelos (solo para fines de desarrollo rápido):

```tsx
export enum FerrariModels {
    Ferrari812GTS = '812 GTS',
    Ferrari296GTB = '296 GTB',
    Ferrari296GTS = '296 GTS',
    FerrariSF90Stradale = 'SF90 STRADALE',
    FerrariSF90Spider = 'SF90 SPIDER',
    FerrariF8Tributo = 'F8 TRIBUTO',
    FerrariF8Spider = 'F8 SPIDER',
    FerrariRoma = 'FERRARI ROMA',
    FerrariPortofinoM = 'FERRARI PORTOFINO M',
    Ferrari812Competizione = 'FERRARI 812 COMPETIZIONE',
    Ferrari812CompetizioneA = 'FERRARI 812 COMPETIZIONE A',
    FerrariDaytonaSP3 = 'FERRARI DAYTONA SP3',
    FerrariMonzaSP1 = 'FERRARI MONZA SP1',
    FerrariMonzaSP2 = 'FERRARI MONZA SP2'
}


export type VehicleProps = {
    code: string
    license: string
    model: FerrariModels
    photo: string
    logo: string
}
```

Dentro del proyecto se definieron muchas estructuras de tipo, pero no las explicaré en este documento.

## Mock de Vehículos

Creamos algunos objetos temporales, con la finalidad de servirnos de ejemplo. Las imágenes estarán en base64, mientras que los códigos serán identificadores únicos, por lo que instalo el módulo de uuid con los siguientes comandos:

```txt
pnpm i uuid
```

```txt
pnpm i @types/uuid -D
```

## Bootstrap e Icons

Vamos a usar el framework de Bootstrap y un modulo de iconos gratis, por lo que instalamos los paquetes con el siguiente comando:

```txt
pnpm i bootstrap@5.2.0 @fortawesome/fontawesome-free
```

Luego, dentro del archivo `index.tsx` hacemos la siguiente importación:

```tsx
...
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
...
```

## React Router

Como este proyecto tendrá rutas, he instalado el paquete de React Router con el siguiente comando:

```txt
pnpm i react-router-dom@6
```

El archivo de configuración de rutas se llama `router/AppRouter.tsx`, y consta de una Functional Component que llama los componentes necesarios de react-router-dom para establecer la estructura del enrutamiento, y también determina cuales serán los componentes del proyecto que se mostrarán según la ruta.

```tsx
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={ <HomeScreen /> } />
                <Route path="/catalog" element={ <CatalogScreen /> } />
                <Route path='/catalog/:vehicleId' element={ <DetailScreen /> } />
                <Route path="/admin" element={ <AdminScreen /> } />
                <Route path="/create" element={ <CreateScreen /> } />
                <Route path="/edit/:vehicleId" element={ <EditScreen /> } />
                <Route path="*" element={ <NotFoundScreen /> } />
            </Routes>
            <Footer />
        </BrowserRouter >
    )
}
```

Luego dentro del archivo `App.tsx` hacemos el llamado del componente:

```tsx
const App = () => {
    return (
        <AppRouter />
    )
}
```

## Contexto

Como en este proyecto no estamos conectados a un backend real, sino que estamos usando mocks para simular la interacción con el mismo, decidí utilizar el Context API para mantener un estado global al cual pudiera acceder y hacer las modificaciones respectivas. Lo primero para configurar el contexto será lo siguiente:

1. Definir el tipo de acciones a realizar con los reducers dentro del archivo `reducers/types.ts`:

   ```ts
   export enum Types {
       CREATE = '[Mock] create',
       EDIT = '[Mock] edit',
       DELETE = '[Mock] delete',
       READ = '[Mock] read'
   }
   ```

2. Definir las estructuras de `type` en el archivo `types/context.ts`, las cuales se usarán dentro de la configuración del proyecto:

   ```ts
   export type ContextProps = {
       children: ReactNode
   }
   
   
   export type ActionReducer = {
       type: Types
       payload: any
   }
   
   
   export type Dispatch = (action: ActionReducer) => void
   
   
   export type State = {
       vehicles: VehicleProps[]
   }
   
   
   export type VehicleContextProps = {
       state: State;
       dispatch: Dispatch
   }
   ```

3. Crear la función reducer, la cuál nos permite definir los pasos a seguir dependiendo del tipo de acción que realiza el usuario (archivo `reducers/mock-reducer.ts`):

   ```ts
   export const mockReducer = (state: State, { type, payload }: ActionReducer): State => {
       switch (type) {
           case Types.READ: return {
               ...state,
               vehicles: payload
           }

           case Types.CREATE: return {
               ...state,
               vehicles: [
                   ...state.vehicles,
                   payload
               ]
           }

           case Types.EDIT: return {
               ...state,
               vehicles: state.vehicles.map(({ ...vehicle }) => {
                   if (vehicle.code === payload.code) {
                       vehicle = { ...payload }
                   }
                   return vehicle
               })
           }

           case Types.DELETE: return {
               ...state,
               vehicles: state.vehicles.filter((vehicle: VehicleProps) => {
                   return vehicle.code !== payload
               })
           }

           default:
               return state
       }
   }          
   ```

4. Crear el contexto dentro de `context/VehicleContext.tsx`:

   ```ts
   import { createContext } from 'react';

   export const VehicleContext = createContext<VehicleContextProps>({} as VehicleContextProps)
   ```

5. Definir un componente funcional que provea el contexto a los componentes hijos que se le pasen (archivo `context/VehicleContext.tsx`):

   ```tsx
   import { useReducer } from 'react';

   const initialVehicleState: State = {
       vehicles: VehiclesMocks
   }

   export const VehicleContextProvider = ({ children }: ContextProps) => {
       const [ vehiclesState, dispatch ] = useReducer(mockReducer, initialVehicleState)
   
       const state = { state: vehiclesState, dispatch }
   
       return (
           <VehicleContext.Provider value={ state }>
               { children }
           </VehicleContext.Provider>
       )
   }
   ```

6. Para este aplicación, proveemos el contexto de manera global a todo el proyecto dentro de `App.tsx`:

   ```tsx
   const App = () => {
       return (
           <VehicleContextProvider>
               <AppRouter />
           </VehicleContextProvider>
       )
   }
   ```

7. Creamos un hook personalizado para facilitar el acceso al estado que se almacena dentro del contexto (archivo `hooks/useVehicles.ts`):

   ```ts
   import { useContext } from "react"

   export const useVehicles = () => {
       const { state: { vehicles }, dispatch } = useContext(VehicleContext)
   
       return { vehicles, dispatch }
   }
   ```

8. Definimos a manera de función dentro del archivo `actions/vehicles-actions`, las estructuras que vamos a despachar en cada tipo de acción:

   ```ts
   export const readAction = (data: VehicleProps[]) => {
       return {
           type: Types.READ,
           payload: data
       }
   }
   
   
   export const createAction = (data: VehicleProps) => {
       return {
           type: Types.CREATE,
           payload: data
       }
   }
   
   
   export const editAction = (data: VehicleProps) => {
       return {
           type: Types.EDIT,
           payload: data
       }
   }
   
   
   export const deleteAction = (code: string) => {
       return {
           type: Types.DELETE,
           payload: code
       }
   }
   ```

9. Cuando necesitamos modificar el contexto, tenemos que hacer un dispatch con alguna de las funciones del punto anterior. A continuación la manera en que se usaron en los casos de creación, edición y eliminación:

    - Creación: `Create/FormCreateVehicle.tsx`

        ```tsx
        const FormCreateVehicle = () => {
            const { dispatch } = useVehicles()

            const { state: vehicle, handleChange } = useForm<VehicleProps>({...})

            const handleCreate = (...) => {
                ...
                if (model.trim() === '' || ...) {
                    ...
                } else {
                    dispatch(createAction({ ...vehicle }))
                }
            }
        }
        ```

    - Edición: `Edit/FormEditVehicle.tsx`

        ```tsx
        const FormEditVehicle: FC<VehicleProps> = (props) => {
            const { dispatch } = useVehicles()

            const { state: vehicle, handleChange } = useForm<VehicleProps>({ ...props })

            const handleEdit = (...) => {
                ...
                if (model.trim() === '' || ...) {
                    ...
                } else {
                    dispatch(editAction({ ...vehicle }))
                }
            }
        }
        ```

    - Eliminación: `Admin/ItemTable.tsx`

        ```tsx
        const ItemTable: FC<VehicleProps> = ({ code, model, license, photo, logo }) => {
            const { dispatch } = useVehicles()
            
            const handleDelete = () => {
                const delay = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(dispatch(deleteAction(code)))
                    }, 1000)
                })
                ...
            }
        }
        ```

## Subir imágenes en Base64

En nuestro modelo tenemos 2 campos de tipo string, los cuales se están empleando para almacenar imágenes en Base64, el problema actual es como subir los archivos, codificarlos a la base requerida, y almacenarlos en el nuevo registro.

Lo primero que vamos a hacer, es definir una función que nos permita la lectura y retorno de los archivos en Base64. Dicho método recibe un archivo y retorna una promesa que resuelve el resultado del archivo luego del evento `onload`, y en caso de error retorna dicha situación. La función fue definida en el archivo `functions/upload-image.ts`:

```ts
export const uploadImage = async (image: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()

        fileReader.readAsDataURL(image)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
```

Definimos otra función en el archivo `functions/handle-photo.ts`, con la cual recibimos el evento del input del formulario, y un método que se encarga de modificar el estado de un objeto que se pasa por referencia desde el componente que emplee la función que estamos construyendo.

El cuerpo de la función se encarga de analizar si no se cargaron archivos, si el elemento cargado es o no compatible como un patrón de tipo de archivo, y por último hace uso del método creado anteriormente para generar la codificación del archivo, los cuales debemos enviar en tipo String a la función de cambio junto a el evento del input.

```ts
export const handlePhoto = async (e: FormEvent<HTMLInputElement>, handleChange: Function) => {
    if (!e.currentTarget.files?.length) return

    const image = e.currentTarget.files![ 0 ]

    if (!image.type.match(/image\/*/)) {
        alert("Tipo de archivo no permitido")
        return
    }

    const decodeImage = await uploadImage(image)

    handleChange(e, String(decodeImage))
}
```

¿Por que es importante enviar el evento del input en la función de handleChange? ¿De donde viene esta función? Pues bien, tenemos un hook personalizado para la administración de los datos con los que se interactúan en un formulario.

Dentro del archivo `hooks/useForm.ts`, hemos definimos el hook personalizado, el cual recibe un objeto para un valor inicial con un tipo genérico. Creamos un estado con el valor inicial, el cual será modificado dentro de una función interna llamada `handleChange`, en la cual desestructuramos la propiedad `target` el evento que se le ingresa, y le entregamos de manera opcional un valor en caso de que queramos una modificación personalizada o el control del formulario no este cambiando su propiedad `value`. En cada cambio que se detecte en el evento, modificamos el estado en la propiedad especifica con su valor correspondiente. Por último retornamos el objeto estado y la función de cambio.

```tsx
export const useForm = <T extends Object>(initialState: T) => {
    const [ state, setState ] = useState(initialState);

    const handleChange = ({ target }: ChangeEvent<any>, optionalValue?: string) => {
        const { name, value } = target
        setState({
            ...state,
            [ name ]: optionalValue ?? value
        })
    }

    return {
        state,
        handleChange
    }
} 
```

La manera en que usaremos todo lo anterior en conjunto, será de la siguiente manera: En el formulario de creación o edición, usamos el hook `useForm`, del cual desestructuramos su estado y la función de cambio, luego definimos una función que se implementará dentro de los controles `input` de tipo `file`, en el cual se captura el evento y se envía en conjunto a la función de cambio del objeto.

En los controles que no están relacionados con archivos, usamos la función `handleChange` en la propiedad `onChange`, asignamos a la propiedad `name` el mismo nombre de la propiedad del objeto que queremos modificar, y en el atributo `value` asignamos el valor que adquiere dicha propiedad del estado.

En los controles de archivos usamos la función `handleFile` en el atributo `onChange`, hacemos la misma estrategia del atributo `name`, pero en este caso no añadimos el atributo `value`, pues este esta siendo enviado de manera personalizada como `decodeImage` dentro de la función `handlePhoto` (explicada anteriormente).

```tsx
const FormEditVehicle: FC<VehicleProps> = (props) => {
    const { state: vehicle, handleChange } = useForm<VehicleProps>({ ...props })

    const { model, license, photo, logo } = vehicle

    const handleFile = async (e: FormEvent<HTMLInputElement>) => {
        await handlePhoto(e, handleChange)
    }

    return (
        <form onSubmit={ handleEdit } className="container">
            <div className="mb-3">
                <label htmlFor="model" className="form-label">Modelo</label>
                <input type="text" className="form-control" id="model" name="model" value={ model } onChange={ handleChange } />
            </div>

            <div className="mb-3">
                <label htmlFor="photo" className="form-label">Foto</label>
                <div className="row">
                    <input type="file" className="form-control col-xs-12 col-md-6" id="photo" name="photo" onChange={ handleFile } accept="image/*" />
                    <img className="col-xs-12 col-md-6 mt-3" src={ photo } alt={ model } />
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Actualizar modelo</button>
        </form>
    )
}
```
