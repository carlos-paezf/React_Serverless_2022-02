import { ReactElement } from "react"


export type ButtonIconProps = {
    className: string
    handleClick: () => void
}


export type ButtonNavigateProps = {
    text: string
    navigateUrl: string
    className?: string
}


export type ImageModalProps = {
    code: string
    model: string
    photo: string
}


export type JumbotronProps = {
    dark?: boolean
    title: string
    msg: string
    children?: ReactElement[] | ReactElement
}


export type NavItemProps = {
    route: string
    text: string
}


export enum FerrariModels {
    Ferrari812GTS = '812 GTS',
    Ferrari296GTB = '296 GTB',
    Ferrari296GTS = '296 GTS',
    FerrariSF90Stradale = 'SF90 STRADALE',
    FerrariSF90Spider = 'SF90 SPIDER',
    FerrariF8Tributo = 'F8 TRIBUTO',
    FerrariF8Spider = 'F8 SPIDER',
    FerrariRoma = 'FERRARI ROMA',
    FerrariPortofinoM = 'FERRARI PORTOFINO M',
    Ferrari812Competizione = 'FERRARI 812 COMPETIZIONE',
    Ferrari812CompetizioneA = 'FERRARI 812 COMPETIZIONE A',
    FerrariDaytonaSP3 = 'FERRARI DAYTONA SP3',
    FerrariMonzaSP1 = 'FERRARI MONZA SP1',
    FerrariMonzaSP2 = 'FERRARI MONZA SP2'
}


export type VehicleProps = {
    code: string
    license: string
    model: FerrariModels | ''
    photo: string
    logo: string
}