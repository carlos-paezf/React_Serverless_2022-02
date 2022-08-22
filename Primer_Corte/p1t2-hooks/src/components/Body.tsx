import React, { useState } from "react"

const Body = () => {
    type formMultiply = React.FormEvent<HTMLFormElement>

    const [result, setResult] = useState<number>(0)

    const [numbers, setNumber] = useState<{ num1: number, num2: number }>({
        num1: 0,
        num2: 0
    })

    const multiply = () => {
        setResult(numbers.num1 * numbers.num2)
    }

    const sendForm = (e: formMultiply) => {
        e.preventDefault()
        multiply()
    }

    return (
        <div className="p-5">
            <form onSubmit={sendForm}>
                <div className="row">
                    <div className="mb-3 col-md-6">
                        <label htmlFor="number-1" className="form-label">Número 1</label>
                        <input type="number" className="form-control" id="number-1" onChange={(e) => setNumber({ ...numbers, num1: +e.target.value })} />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="number-2" className="form-label">Número 2</label>
                        <input type="number" className="form-control" id="number-2" onChange={(e) => setNumber({ ...numbers, num2: +e.target.value })} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Multiplicar</button>
            </form>

            <h1 className="mt-5">Resultado: {result}</h1>
        </div>
    )
}

export default Body
