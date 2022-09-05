import { ReactElement } from "react"


export type JumbotronProps = {
    dark?: boolean
    title: string
    msg: string
    children?: ReactElement[] | ReactElement
}