import { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { ButtonNavigateProps } from "../../types";


const ButtonNavigate: FC<ButtonNavigateProps> = ({ text, navigateUrl, className = "btn btn-dark btn-lg" }) => {
    const navigate = useNavigate()

    const handleCatalog = () => {
        navigate(navigateUrl)
    }

    return (
        <button className={ className } onClick={ handleCatalog } type="button"> { text }</button >
    )
}


export default ButtonNavigate