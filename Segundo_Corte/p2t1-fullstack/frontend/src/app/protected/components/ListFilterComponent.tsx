import { GetFilterPropsType } from "../types"


export const ListFilterComponent = ( { from, limit, handleChange }: GetFilterPropsType ) => {
    return (
        <form className="my-3">
            <div className="row">
                <div className="col-auto">
                    <label htmlFor="from" className="col-form-label">Desde:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="from" className="form-control" placeholder="Desde:" name="from" value={ from } onChange={ handleChange } min={ 0 } max={ ( limit ?? 10 ) - 1 } />
                </div>

                <div className="col-auto">
                    <label htmlFor="limit" className="col-form-label">Hasta:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="limit" className="form-control" placeholder="Desde:" name="limit" value={ limit } onChange={ handleChange } min={ ( from ?? 0 ) + 1 } />
                </div>
            </div>
        </form >
    )
}