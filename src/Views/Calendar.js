import { Col, Container, Row } from 'reactstrap'
import { Calendario } from '../Components/CalendarView';
import '../assets/css/calendar.css'
import 'animate.css'


export const Calendar = () => {
    return (
        <Container >
            <Row className='animate__animated  animate__fadeIn'>
                <Col xs="12">
                    <Calendario />
                </Col>
            </Row>
        </Container>
    )
}