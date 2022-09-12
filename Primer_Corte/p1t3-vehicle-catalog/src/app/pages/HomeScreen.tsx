import ButtonNavigate from "../components/Button/ButtonNavigate"
import Jumbotron from "../components/Jumbotron/Jumbotron"

import homeScreenInternalProps from "../../util/functions/home-screen-props"


const HomeScreen = () => {
    const {
        heroProps,
        createProps,
        adminProps,
        catalogRedirect,
        createRedirect,
        adminRedirect
    } = homeScreenInternalProps

    return (
        <div className="d-flex mt-1 mx-0 row">
            <div className="col-12">
                <Jumbotron { ...heroProps }>
                    <ButtonNavigate { ...catalogRedirect } />
                </Jumbotron>
            </div>

            <div className="container row col-12 mt-3 mx-auto">
                <div className="col-md-6">
                    <Jumbotron { ...createProps }>
                        <ButtonNavigate { ...createRedirect } />
                    </Jumbotron>
                </div>

                <div className="col-md-6">
                    <Jumbotron { ...adminProps }>
                        <ButtonNavigate { ...adminRedirect } />
                    </Jumbotron>
                </div>
            </div>
        </div>
    )
}


export default HomeScreen