import type { ButtonNavigateProps, JumbotronProps } from "../types"


const [ heroProps, createProps, adminProps ]: JumbotronProps[] = [
    {
        dark: true,
        title: "Gama Ferrari",
        msg: "Catalogo de Vehículos. Exposición de vehículos marca Ferrari modelos 2022"
    },
    {
        dark: false,
        title: "Añadir vehículo",
        msg: "Añade un nuevo vehículo al catalogo de ventas de Ferrari"
    },
    {
        dark: true,
        title: "Administrador de catalogo",
        msg: "Administra el listado de vehículos ofertados en la página"
    }
]


const [ catalogRedirect, createRedirect, adminRedirect ]: ButtonNavigateProps[] = [
    {
        text: "Ir al catalogo de vehículos",
        navigateUrl: "/catalog",
        className: "btn btn-danger btn-lg"
    },
    {
        text: "Añadir vehículo",
        navigateUrl: "/create"
    },
    {
        text: "Ir al administrador",
        navigateUrl: "/admin",
        className: "btn btn-secondary btn-lg"
    }
]


const homeScreenInternalProps = {
    heroProps, createProps, adminProps,
    catalogRedirect, createRedirect, adminRedirect
}


export default homeScreenInternalProps