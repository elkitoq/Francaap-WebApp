import { Col, Container, Row } from 'reactstrap'
//import { Calendario } from '../Components/CalendarView';
import '../assets/css/calendar.css'
import 'animate.css'
import { FormLogin } from '../Components/FormLogin';

export const Calendar = () => {
    return (
        <Container >
            <Row className='animate__animated  animate__fadeIn'>
                <Col xs="12">
                    {/*<Calendario />*/}
                    <FormLogin/>
                </Col>
            </Row>
        </Container>
    )
}