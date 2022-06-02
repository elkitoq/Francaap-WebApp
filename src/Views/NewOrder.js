import { useState } from 'react'
import { Row, Col, Form, Input, Button,Label } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../assets/css/newOrder.css'
import { saveNewWork } from '../Helpers/saveNewWork'
import 'animate.css'


export const NewOrder = () => {

    const MySwal = withReactContent(Swal)

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        numberCel:'',
        device:'',
        problem: '',
        deliveryDate:'',
        state: 1

    }) 

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async(event) => {
        event.preventDefault()
        let validation = validationForm(datos)
        if(validation===false){
            MySwal.fire(
                {
                    icon:'error',
                    title:'Algo salio mal!',
                    text: 'Verifique que todos los campos esten completos correctamente!',
                    showConfirmButton: true,
                    timer: 5000
                }
            )
        }else{
            let result = await saveNewWork(datos)
            console.log(result)
            MySwal.fire(
                {
                    icon: result.data ? 'sucess': 'error',
                    title: result.data ? 'Buen Trabajo!' : 'Algo salio mal!',
                    text: result.data ? `El trabajo se guardo correctamente!\n El id es #${result.id}` : 'Ups el trabajo no se pudo guardar correctamente!',
                    showConfirmButton: true,
                }
            )
            result.data ? clearInputs() : console.log('');
        }
    }
        
    function validationForm(fields){
        for(let field in fields){
            if(fields[field].length === 0){
                console.log(fields[field])
                return false
            }
        }  
        return true
    }

    function clearInputs(){
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        )
       let textarea = document.getElementById("problema")
       textarea.value = ''

       setDatos({nombre: '',
       email: '',
       numberCel:'',
       equipo:'',
       problema: '',
       fechaEntrega:'',
       state: 1})
    }

    return (
        <Row className="content-newOrder animate__animated  animate__fadeIn">
            <Row className="content-newOrder-inner">
                <Col className="band-yellow" sm="2"></Col>
                <Col className="form-inner-newOrder">
                    <Form className="form-newOrder">
                        <div className='label-input'>
                            <Label >Nombre y Apellido</Label>
                            <Input className="imputs-newOrder" type="text" onChange={handleInputChange} name="name" id="nombre" />
                        </div>
                        <div className='label-input'>
                            <Label >Email</Label>
                            <Input className="imputs-newOrder" type="email" onChange={handleInputChange} name="email" id="email" />
                        </div>
                        <div className='label-input'>
                            <Label >Numero de Telefono</Label>
                            <Input className="imputs-newOrder" type="number" onChange={handleInputChange} name="numberCel" id="numberCel" />
                        </div>
                        <div className='label-input'>
                            <Label >Equipo</Label>
                            <Input className="imputs-newOrder" type="text" onChange={handleInputChange} name="device" id="equipo" /> 
                        </div>
                        <div className='label-input'>
                            <Label >Fecha de entrega</Label>
                            <Input className="imputs-newOrder" type="date" onChange={handleInputChange} name="deliveryDate" id="fechaEntrega" />
                        </div>
                        <div className='label-input'>
                            <Label >Problema de equipo</Label>
                            <Input className="imputs-newOrder textArea" type="textarea" onChange={handleInputChange} name="problem" id="problema" />
                        </div>
                        <div className="buttons-container">
                            <Button className="btn-cancelar" onClick={clearInputs}>Cancelar</Button>
                            <Button className="btn-crear" id="btnSendMail" onClick={enviarDatos}>Crear</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Row>
    )
}