import { Button } from 'reactstrap'
import {useEffect, useState } from 'react';
import { quickUpdateWorkState } from '../Helpers/updateWork.js'

export const SelectState = ({id, state}) => {

    const [value, setValue] = useState(state)

    const handleChange = (e) => {
        let { value } = e.target;
        setValue({
            value
        });
    }

    const update = async () => {
        try {
            console.log('enviando peticion')
            quickUpdateWorkState(value,id)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
       
    },[value])

    return (
        <div>
            <select value={value} onChange={handleChange} style={{ width: "auto", marginRight: "5px", height: "25px", cursor: "pointer", borderRadius: ".2rem" }}>
                <option value={'1'} >Espera</option>
                <option value={'2'} >Progreso</option>
                <option value={'3'}>Terminado</option>
                <option value={'4'}>Entregado</option>
            </select>
            <Button size='sm' color='success' onClick={async (e) =>  update()} >Save</Button>
        </div>
    )
}