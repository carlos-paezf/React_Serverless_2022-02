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
    - assets
    - components
    - hooks
    - router
    - services
    - types
    - util
    App.tsx
    index.css
    index.tsx
```

## Tipos

Creamos una estructura que se encarga de tipar los objetos con la información de los vehiculos. Lo acompaña un enum para establecer algunos valores por defecto en la propiedad de los modelos:

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

El archivo de configuración de las rutas se llama `router/AppRouter.tsx`, y consta de una función que llama los componentes necesarios de react-router-dom para establecer la estructura del enrutamiento, y también determina cuales serán los componentes de mi proyecto que se mostrarán según la ruta.

```tsx

```
