import { FC } from "react"
import { ButtonIconProps } from "../../types"


const ButtonIcon: FC<ButtonIconProps> = ({ className, handleClick }) => {
    return (
        <button className="btn btn-lg" onClick={ handleClick }>
            <i className={ className }></i>
        </button>
    )
}


export default ButtonIcon