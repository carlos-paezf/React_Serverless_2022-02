import { validate } from "class-validator"
import { red } from "colors"
import { NextFunction, Request, Response } from "express"
import { UserDTO } from "../dtos"
import { UserService } from "../services"
import { HttpResponse } from "../shared/response/http.response"


export class UserMiddleware {
    private _service = new UserService()
    private _httpResponse = new HttpResponse()

    public idParamValidator = async (req: Request, res: Response, next: NextFunction, id: string) => {
        try {
            const userExists = await this._service.findOneUserById(id)

            return (userExists) ? next() : this._httpResponse.NotFound(res, `No hay resultados para el id '${ id }'`)
        } catch (error) {
            console.log(red(`Error en UserMiddleware:idParamValidator: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public userValidator = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const valid = new UserDTO()

            valid.birthDate = req.body.birthDate
            valid.email = req.body.email
            valid.name = req.body.name
            valid.password = req.body.password
            valid.role = req.body.role
            valid.username = req.body.username

            validate(valid).then((error) => {
                return error.length ? this._httpResponse.PreconditionFailed(res, error) : next()
            })
        } catch (error) {
            console.log(red(`Error in MeetingMinutesMiddleware:userValidator: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }
} 