/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { getWorkById } from '../Helpers/getWorks';
import { AddNews } from './AddNews';
import '../assets/css/modal.css'
import { SelectStateModal } from './SelectStateModal';
import { SpinLoader } from './SpinLoader';
import { UpdateWorkState } from '../Helpers/updateWork';
import { useSearchOneWork } from '../Hooks/useSearchOneWork';

export const ModalSearch = ({open, name, closeModal}) => {
 
    let id = name.length === 5 ? name : name.substring(1,6)
    const{work,loading} = useSearchOneWork(id)
    const [news, setNews] = useState(work.news ? work.news : [])
    const [state, setState] = useState(work.state)
 
    const update = async () => {
        console.log('enviando peticion')
        await UpdateWorkState(id,state,news) && closeModal(!open) 
        console.log('peticion finalizada')
    }

    useEffect(() => {
      try{
       setNews(work.news)
       setState(work.state)
      }catch(error){
       console.log(error)
      }
    }, [work])
    
  
    return (
        <div>
            <Modal isOpen={open} toggle={()=>closeModal(!open)}>
                {!id ? <SpinLoader color={'rgba(17,201,183,100)'} title={'Por favor ingrese un ID'} /> : 
                loading ?  <SpinLoader color={'rgba(17,201,183,100)'} title={'Buscando..'} /> :
                <div>
                    <ModalHeader >Dueño del equipo: {work.name}</ModalHeader>
                    <ModalBody>
                        <span>Id de trabajo: <span>#{id}</span></span>
                        <span>Fecha de ingreso: <span></span>{work.date}</span>
                        <span>Telefono: <span>{work.numberCel}</span></span>
                        <span>Equipo: <span>{work.device}</span></span>
                        <span>Problema: <span>{work.problem}</span></span>
                        <span>Noticias: <ul>{!news ? <span>No hay noticias agregadas</span> : news.map(element=><li key={element.index}>{element}</li>)}</ul></span>
                        <AddNews setNews={setNews}/>
                        <span> Estado: <SelectStateModal state={work.state} setState={setState}/></span>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>closeModal(!open)}>Cerrar</Button>{' '}
                        <Button color="success" className='btn-update' onClick={update}>Actualizar Trabajo</Button>{' '}
                    </ModalFooter>
                </div>}

            </Modal>
        </div>
    );
}
