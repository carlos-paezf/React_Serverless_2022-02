import { red } from "colors";
import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { BaseController } from "../config";
import { UserService } from "../services";


export class UserController extends BaseController<UserService> {
    constructor() {
        super(UserService)
    }

    public findUsers = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { from = 0, limit = 10, order = 'ASC' } = req.query

            const { 0: data, 1: totalCount } = await this._service.findUsers(
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
            console.log(red(`Error en UserController:findUser: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public findOneUserById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { id } = req.params

            const data = await this._service.findOneUserById(id)

            if (!data) return this._httpResponse.NotFound(res, `No hay resultados para el id ${ id }`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en UserController:findOneUserById: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public findUserByUsername = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { username = '' } = req.query

            const data = await this._service.findUserByUsername(String(username).toLowerCase())

            if (!data) return this._httpResponse.NotFound(res, `No hay resultados para el nombre de usuario '${ username }'`)

            return this._httpResponse.Ok(res, {
                username, data
            })
        } catch (error) {
            console.log(red(`Error en ArtistController:fundUserByUsername: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public createUser = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const user = req.body

            const data = await this._service.createUser({ ...user })

            return this._httpResponse.Created(res, data)
        } catch (error) {
            console.log(red(`Error en UserController:createUser: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public updateUserById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { id } = req.params
            const user = req.body

            const data: UpdateResult = await this._service.updateUserById(id, { ...user })

            if (!data.affected) return this._httpResponse.BadRequest(res, `Los cambios no fueron aplicados`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en UserController:createUser: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public softDeleteUserById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { idDisabled } = req.params
            const data: DeleteResult = await this._service.softDeleteUserById(idDisabled)

            if (!data.affected) return this._httpResponse.BadRequest(res, `No se pudo remover el id '${ idDisabled }'`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en UserController:softDeleteUserById: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }
}