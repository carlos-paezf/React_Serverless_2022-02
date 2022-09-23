# Documentación

## Configuración del proyecto

### Backend

El proyecto backend con NodeJs se inicializo con el siguiente comando:

```txt
npm init -y
```

Ya que se decidió usar TypeScript dentro del proyecto, entonces se debe hacer la configuración del mismo. Lo primero es instalarlo con el siguiente comando:

```txt
pnpm i typescript -S
```

Luego creamos el archivo de configuración con el siguiente comando:

```txt
tsc --init
```

Dentro del archivo `tsconfig.json` se aplicaron los siguientes cambios:

```json
{
    "compilerOptions": {
        ...,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        ...,
        "outDir": "./dist",
        ...,
        "strictPropertyInitialization": true, 
        ...,
    }
}
```

Luego, instalamos las siguientes dependencias:

```txt
pnpm i class-transformer class-validator colors cors dotenv express express-validator morgan morgan-body mysql reflect-metadata typeorm typeorm-naming-strategies uuid -S
```

También hacemos la instalación de dependencias en modo desarrollo con el siguiente comando:

```txt
pnpm i -D @types/cors @types/express @types/morgan @types/node@"*" @types/uuid concurrently eslint nodemon ts-node
```

En el archivo `package.json` se establecieron los siguientes scripts:

```json
{
    ...,
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "tsc && node dist/server.js",
        "start:dev": "tsc && concurrently \"tsc -w\" \"nodemon dist/server.js\"",
        "start:prod": "SET NODE_ENV=production && npm start",
        "typeorm": "typeorm-ts-node-esm -d ./src/config/data.config.ts",
        "m:gen": "npm run typeorm migration:generate",
        "m:run": "npm run typeorm migration:run",
        "docker-compose": "docker-compose up -d"
    },
}
```

### Frontend

El proyecto frontend de React se creo con el siguiente comando:

```txt
pnpm create frontend p1t3-vehicle-catalog --template typescript
```
