import { Button } from 'reactstrap'
import { useState } from 'react';
import { quickUpdateWorkState } from '../Helpers/updateWork.js'

export const SelectState = ({id, state,setUpdate}) => {

    const [value, setValue] = useState(state)

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const update = async () => {
        try {
            console.log('enviando peticion')
            await quickUpdateWorkState(value,id)
            setUpdate(update=>!update)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <select value={value} onChange={handleChange} style={{ width: "auto", marginRight: "5px", height: "25px", cursor: "pointer", borderRadius: ".2rem" }}>
                <option value={'1'} >Espera</option>
                <option value={'2'} >Progreso</option>
                <option value={'3'} >Terminado</option>
                <option value={'4'} >Entregado</option>
            </select>
            <Button size='sm' color='success' onClick={(e) =>  update()} >Save</Button>
        </div>
    )
}