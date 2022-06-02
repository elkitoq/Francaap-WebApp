import {Outlet} from 'react-router-dom'
import { Sidebar } from './Sidebar.js'
import { Navbar } from './Navbar'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styleGeneral.css'

export const Layout= ()=>{
  
    return (
      <Container className="themed-container" fluid>
        <Row className='wrapper'>
          <Sidebar className='sidebar-wrapper'/>
          <Col className='content-wrapper'>
             <Navbar/>
            <Outlet />
          </Col>
        </Row>
      </Container>
    );
  }
