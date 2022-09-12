import { FC } from "react"

import type { ButtonIconProps } from "../../../util/types"


const ButtonIcon: FC<ButtonIconProps> = ({ className, handleClick }) => {
    return (
        <button className="btn btn-lg" onClick={ handleClick }>
            <i className={ className }></i>
        </button>
    )
}


export default ButtonIcon