import { FC } from 'react'

import type { JumbotronProps } from '../../../util/types'


const Jumbotron: FC<JumbotronProps> = ({ dark = false, title, msg, children }) => {
    return (
        <div className={ `p-5 ${ dark ? 'bg-dark' : 'bg-light' }` }>
            <div className="container-fluid py-5">
                <h1 className={ `display-5 fw-bold ${ dark && 'text-white' }` }>{ title }</h1>
                <p className={ `col-md-8 fs-4 ${ dark && 'text-white' }` }>{ msg }</p>
                { children }
            </div>
        </div >
    )
}


export default Jumbotron