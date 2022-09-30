import { red } from "colors";
import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { BaseController } from "../config";
import { ArtistService } from "../services";


export class ArtistController extends BaseController<ArtistService> {
    constructor() {
        super(ArtistService)
    }

    public findArtists = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { from = 0, limit = 10, order = 'ASC' } = req.query

            const { 0: data, 1: totalCount } = await this._service.findArtists(
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
            console.log(red(`Error en ArtistController:findArtist: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public findOneArtistById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { id } = req.params

            const data = await this._service.findOneArtistById(id)

            if (!data) return this._httpResponse.NotFound(res, `No hay resultados para el id ${ id }`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en ArtistController:findOneArtistById: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public findArtistsByName = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { name = '' } = req.query

            const { 0: data, 1: totalCount } = await this._service.findArtistsByName(String(name).toLowerCase())

            if (!data.length) return this._httpResponse.NotFound(res, `No hay resultados para el nombre '${ name }'`)

            return this._httpResponse.Ok(res, {
                name, totalCount, data
            })
        } catch (error) {
            console.log(red(`Error en ArtistController:fundArtistsByName: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public createArtist = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const artist = req.body

            const data = await this._service.createArtist({ ...artist })

            return this._httpResponse.Created(res, data)
        } catch (error) {
            console.log(red(`Error en ArtistController:createArtist: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public updateArtistById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { id } = req.params
            const artist = req.body

            const data: UpdateResult = await this._service.updateArtistById(id, { ...artist })

            if (!data.affected) return this._httpResponse.BadRequest(res, `Los cambios no fueron aplicados`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en ArtistController:createArtist: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public softDeleteArtistById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { idDisabled } = req.params
            const data: DeleteResult = await this._service.softDeleteArtistById(idDisabled)

            if (!data.affected) return this._httpResponse.BadRequest(res, `No se pudo remover el id '${ idDisabled }'`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en ArtistController:softDeleteArtistById: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }
}