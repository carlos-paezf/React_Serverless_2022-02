import { red } from "colors";
import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { BaseController } from "../config";
import { TrackService } from "../services";


export class TrackController extends BaseController<TrackService> {
    constructor() {
        super(TrackService)
    }

    public findTracks = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { from = 0, limit = 10, order = 'ASC' } = req.query

            const { 0: data, 1: totalCount } = await this._service.findTracks(
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
            console.log(red(`Error en TrackController:findTrack: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public findOneTrackById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { id } = req.params

            const data = await this._service.findOneTrackById(id)

            if (!data) return this._httpResponse.NotFound(res, `No hay resultados para el id ${ id }`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en TrackController:findOneTrackById: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public createTrack = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const track = req.body

            const data = await this._service.createTrack({ ...track })

            return this._httpResponse.Created(res, data)
        } catch (error) {
            console.log(red(`Error en TrackController:createTrack: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public updateTrackById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { id } = req.params
            const track = req.body

            const data: UpdateResult = await this._service.updateTrackById(id, { ...track })

            if (!data.affected) return this._httpResponse.BadRequest(res, `Los cambios no fueron aplicados`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en TrackController:createTrack: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public softDeleteTrackById = async (req: Request, res: Response): Promise<unknown> => {
        try {
            const { idDisabled } = req.params
            const data: DeleteResult = await this._service.softDeleteTrackById(idDisabled)

            if (!data.affected) return this._httpResponse.BadRequest(res, `No se pudo remover el id '${ idDisabled }'`)

            return this._httpResponse.Ok(res, data)
        } catch (error) {
            console.log(red(`Error en TrackController:softDeleteTrackById: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }
}