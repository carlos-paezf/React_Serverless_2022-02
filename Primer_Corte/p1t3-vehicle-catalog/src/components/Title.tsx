import { FC } from "react"
import ButtonBack from "./ButtonBack"


const Title: FC<{ title: string }> = ({ title }) => {
    return (
        <section className='section__title'>
            <ButtonBack />
            <h1 className='screen__title my-5'>{ title }</h1>
        </section>
    )
}


export default Title