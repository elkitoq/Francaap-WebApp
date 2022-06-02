import { useState } from "react";

export const SelectStateModal = ({state,setState}) => {

    const [value,setValue] = useState(state)

    const handleChange = (e) => {
        let { value } = e.target;
        setValue(value)
        setState({
            value
        });
    }

    return (
        <div>
            <select value={value} onChange={handleChange} style={{ width: "auto", marginRight: "5px", height: "25px", cursor: "pointer", borderRadius: ".2rem" }}>
                <option value={'1'} >Espera</option>
                <option value={'2'} >Progreso</option>
                <option value={'3'}>Terminado</option>
                <option value={'4'}>Entregado</option>
            </select>
        </div>
    )
}