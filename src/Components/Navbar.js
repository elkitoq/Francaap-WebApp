import { Input, InputGroup, Button, Row, Col} from 'reactstrap'
import { useState } from 'react'
 //import { ModalSearch } from '../Components/ModalSearch'
import lupa from '../assets/icons/icon-search.png'
import '../assets/css/searchbar.css'
import { ModalSearch } from './ModalSearch'


export const Navbar = () => {

    const [search, setSearch] = useState('')
    const [openModal, setOpenModal] =useState(false)

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    const handleModal = (toogle)=>{
        setOpenModal(toogle)
    }

    const submitSearchDoc = async (event) => {
        event.preventDefault()
        setOpenModal(!openModal)        
    }

    return (
        <Row className="row-search">
            <Col xs="8">
                <InputGroup className="search-group" size="md">
                    <form className='form-search' onSubmit={submitSearchDoc}>
                        <Input className="input-search" placeholder="Buscar por ID" onChange={handleInputChange} />
                        <Button color="success light" className="button-search" onClick={submitSearchDoc}><img src={lupa} alt="search" width="20px" height="20px" /></Button>
                    </form>
                </InputGroup>
                <ModalSearch open={openModal} name={search} closeModal={handleModal}/>
            </Col>
        </Row>
    )

}

