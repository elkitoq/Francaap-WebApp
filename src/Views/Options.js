import { Outlet } from "react-router-dom"
import { Col } from "reactstrap"
import { NavbarOptions } from "../Components/NavbarOptions"



export const Options = () => {
    return (
        <Col>
            <NavbarOptions/>
            <Outlet/>
        </Col>
    )
}