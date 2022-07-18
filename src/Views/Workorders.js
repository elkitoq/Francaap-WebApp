import React, { useEffect, useState } from 'react'
import { Row, Col, Button} from 'reactstrap'
import { TableWork } from '../Components/TableWork.js'
import 'animate.css'
import '../assets/css/workOrders.css'

export const Workorders = () => {
    
    const [state, setEstate] = useState('1')

    useEffect(() => {

    }, [state])

    return (
        <Row className="content-workorder animate__animated animate__fadeIn">
            <Col xs="12" className="col-content">
                <Row className="row-nav">
                    <div id="btnGroup" className="buttonGroup" size="xl">
                        <Button className="buttonTable" style={state === '1' ? {backgroundColor:'#11c9b7',color:'black',fontWeight:'600'}:{backgroundColor:'rgb(211 215 219)'}} onClick={(e) => setEstate('1')}>En Espera</Button>
                        <Button className="buttonTable" style={state === '2' ? {backgroundColor:'#11c9b7',color:'black',fontWeight:'600'}:{backgroundColor:'rgb(211 215 219)'}} onClick={(e) => setEstate('2')}>En Progreso</Button>
                        <Button className="buttonTable" style={state === '3' ? {backgroundColor:'#11c9b7',color:'black',fontWeight:'600'}:{backgroundColor:'rgb(211 215 219)'}} onClick={(e) => setEstate('3')}>Terminados</Button>
                        <Button className="buttonTable" style={state === '4' ? {backgroundColor:'#11c9b7',color:'black',fontWeight:'600'}:{backgroundColor:'rgb(211 215 219)'}} onClick={(e) => setEstate('4')}>Entregados</Button>
                    </div>
                </Row>
                <Col xs="12" className="col-list" id="no-scroll1" >
                    <TableWork  etapa ={state}/>
                </Col>
            </Col >
        </Row>
    )
}