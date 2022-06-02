/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getWorkById } from '../Helpers/getWorks';
import { AddNews } from './AddNews';
import '../assets/css/modal.css'
import { SelectStateModal } from './SelectStateModal';
import { SpinLoader } from './SpinLoader';

export const ModalSearch = ({open, name, closeModal}) => {

    const [work, setWork] = useState([])
    const [news, setNews] = useState([])
    const [state, setState] = useState('')
    
    let id = name.length === 5 ? name : name.substring(1,6)
     
    const search = async()=>{
        try {
            let content = await getWorkById(id)
            setWork(content)
            setState(work.state)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        search()
    },[open])
  
    return (
        <div>
            <Modal isOpen={open} toggle={()=>closeModal(!open)}>
                {work === undefined || work === false ? 
                <SpinLoader color={'rgba(17,201,183,100)'} /> : 
                <div>
                    <ModalHeader >Dueño del equipo: {work.name}</ModalHeader>
                    <ModalBody>
                        <span>Id de trabajo: <span>#{id}</span></span>
                        <span>Fecha de ingreso: <span></span>{work.date}</span>
                        <span>Telefono: <span>{work.numberCel}</span></span>
                        <span>Equipo: <span>{work.device}</span></span>
                        <span>Problema: <span>{work.problem}</span></span>
                        <span>Noticias: <ul>{news.length === 0 ? <span>No hay noticias agregadas</span> : news.map(element=><li key={element.index}>{element}</li>)}</ul></span>
                        <AddNews setNews={setNews}/>
                        <span> Estado: <SelectStateModal state={state} setState={setState}/></span>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>closeModal(!open)}>Cerrar</Button>{' '}
                        <Button color="success" className='btn-update'>Actualizar Trabajo</Button>{' '}
                    </ModalFooter>
                </div>}
                
            </Modal>
        </div>
    );
}