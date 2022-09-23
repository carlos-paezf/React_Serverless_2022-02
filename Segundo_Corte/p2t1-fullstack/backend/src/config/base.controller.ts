import { HttpResponse } from "../shared/response/http.response"


export class BaseController<T> {
    protected readonly _service: T

    constructor(TService: { new(): T }, protected readonly _httpResponse: HttpResponse = new HttpResponse()) {
        this._service = new TService()
    }
}