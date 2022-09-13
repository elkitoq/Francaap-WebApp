import React from 'react'
import logo from '../logo.svg'
import { Nav, NavItem, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../assets/css/sidebar.css'

import NewOrderActive from '../assets/icons/icon_new_active.svg'
import NewOrderUnactive from '../assets/icons/icon_new_unactive.svg'
import WorkordersActive from '../assets/icons/icon_martillo_active.svg'
import WorkordersUnactive from '../assets/icons/icon_martillo_unactive.svg'
import CalendarActive from '../assets/icons/icon_calendar_active.svg'
import CalendarUnactive from '../assets/icons/icon_calendar_unactive.svg'
import OptionActive from '../assets/icons/icon_settings_active.svg'
import OptionUnactive from '../assets/icons/icon_setting_unactive.svg'

import { useLocation } from 'react-router';

export const Sidebar = () => {

    let url = useLocation();

    return (
        <Col className="col-sidebar">
            <Nav vertical className="sidebar">
                <div className="logo">
                    <img className="logo-img" src={logo} height="150px" alt="" />
                </div>
                <Row>
                    <NavItem>
                    <Link to="/"  style={url.pathname==='/'? {fontSize:'18px', fontWeight:'500',marginLeft:'20px',transition: 'margin-left 1s ease-out'}:{marginLeft:'0px', transition:'margin-left 1s ease-out'}}><img src={url.pathname === '/' ? NewOrderActive : NewOrderUnactive}
                            alt="" />Nueva Orden</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/Workorders" style={url.pathname==='/Workorders'? {fontSize:'18px', fontWeight:'500',marginLeft:'20px',transition: 'margin-left 1s'}:{marginLeft:'0px', transition:'margin-left 1s'}}><img src={url.pathname === '/Workorders' ? WorkordersActive : WorkordersUnactive}
                            alt="" />Trabajos</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/Calendar" style={url.pathname==='/Calendar'? {fontSize:'18px', fontWeight:'500',marginLeft:'20px',transition: 'margin-left 1s'}:{marginLeft:'0px', transition:'margin-left 1s'}}><img src={url.pathname === '/Calendar' ? CalendarActive : CalendarUnactive}
                            alt="" />Calendario</Link>
                    </NavItem>
                    {/* <NavItem>
                        <Link to="/Options" style={url.pathname.includes('Options') ? {fontSize:'18px', fontWeight:'500',marginLeft:'20px',transition: 'margin-left 1s'}:{marginLeft:'0px', transition:'margin-left 1s'}}><img src={url.pathname.includes('Options') ? OptionActive : OptionUnactive}
                            alt="" />Opciones</Link>
                    </NavItem> */}
                </Row>
            </Nav>
        </Col>
    )
}