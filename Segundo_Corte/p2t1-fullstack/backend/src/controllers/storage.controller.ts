import { red } from "colors";
import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { BaseController } from "../config";
import { StorageService } from "../services";


export class StorageController extends BaseController<StorageService> {
    constructor() {
        super(StorageService)
    }

    public findStorages = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { from = 0, limit = 10, order = 'ASC' } = req.query

            const { 0: data, 1: totalCount } = await this._service.findStorages(
                Number(from),
                Number(limit),
                String(order)
            )

            if (!data.length) return this._httpResponse.NotFound(res, `No hay resultados para la búsqueda`)

            return this._httpResponse.Ok(res, {
                from, limit, order,
                partialCount: data.length, totalCount,
                data
            })
        } catch (error) {
            console.log(red(`Error en StorageController:findStorage: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public findOneStorageById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { id } = req.params

            const data = await this._service.findOneStorageById(id)

            if (!data) return this._httpResponse.NotFound(res, `No hay resultados para el id ${ id }`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en StorageController:findOneStorageById: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public createStorage = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const storage = req.body

            const data = await this._service.createStorage({ ...storage })

            return this._httpResponse.Created(res, data)
        } catch (error) {
            console.log(red(`Error en StorageController:createStorage: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public updateStorageById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { id } = req.params
            const storage = req.body

            const data: UpdateResult = await this._service.updateStorageById(id, { ...storage })

            if (!data.affected) return this._httpResponse.BadRequest(res, `Los cambios no fueron aplicados`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en StorageController:createStorage: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public softDeleteStorageById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { idDisabled } = req.params
            const data: DeleteResult = await this._service.softDeleteStorageById(idDisabled)

            if (!data.affected) return this._httpResponse.BadRequest(res, `No se pudo remover el id '${ idDisabled }'`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en StorageController:softDeleteStorageById: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }
}