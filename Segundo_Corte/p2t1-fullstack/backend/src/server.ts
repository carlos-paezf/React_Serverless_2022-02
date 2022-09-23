import 'reflect-metadata'

import cors from 'cors'
import express from 'express'
import morgan from 'morgan';

import { DataSource } from 'typeorm';
import { blue, green, red } from 'colors'

import { ConfigServer } from "./config";


class ServerBootstrap extends ConfigServer {
    private _app: express.Application = express()
    private _port: number = this.getNumberEnv(`PORT`) || 3000

    constructor() {
        super()

        this._dbConnect()
        this._middlewares()

        this._app.use('/api/', this._routers())
        this._listen()
    }

    private _dbConnect = async (): Promise<DataSource | void> => {
        return this.dbConnection
            .then(() => console.log(green.italic(`> Conexión establecida con la base de datos ${ this.getEnvironment('DB_DATABASE') }`)))
            .catch((error) => console.log(red.italic(`> Error intentando conectar con la base de datos ${ this.getEnvironment('DB_DATABASE') }`), error))
    }

    private _middlewares = (): void => {
        this._app.use(express.json())
        this._app.use(express.urlencoded({ extended: true }))
        this._app.use(morgan('common'))
        this._app.use(cors())
    }

    private _routers = (): express.Router[] => {
        return []
    }

    private _listen = () => {
        this._app.listen(this._port, () => {
            console.log(blue(`Servidor corriendo en ${ this.getEnvironment(`PUBLIC_URL`) }:${ this.getNumberEnv(`PORT`) }`))
        })
    }
}


console.clear()
new ServerBootstrap()