import { FC } from "react"
import type { ImageModalProps } from "../../../util/types"


const ImageModal: FC<ImageModalProps> = ({ code, model, photo }) => {
    return (
        <div className="modal modal-xl fade" id={ `imageModal${ code }` } aria-labelledby="imageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modelo: <code>{ model }</code></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex justify-content-center">
                        <img className="modal-image" src={ photo } alt={ model } />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ImageModal