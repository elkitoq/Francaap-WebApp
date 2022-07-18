import React from 'react';
import { ButtonTable } from './ButtonTable.js'
import { SelectState } from './SelectState.js'

export const TableBody = ({ props,setUpdate }) => {

    /**
     * It takes a date in the format of YYYY-MM-DD and returns it in the format of DD-MM-YYYY.
     * @param date - the date you want to format
     * @returns A string with the date in the format of dd-mm-yyyy
     */
    const formatDate =(date)=>{
        let day = date.substring(8,10)
        let month = date.substring(5,7)
        let year = date.substring(0,4)

        return `${day}-${month}-${year}`
    }

    return (
        <tr>
            <th scope="row">#{props.id}</th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.date}</td>
            <td>{formatDate(props.deliveryDate)}</td>
            <td>{props.numberCel}</td>
            <td>{props.device}</td>
            <td>
                <ButtonTable props={props} />
            </td>
            <td><SelectState state={props.state} id={props.id} setUpdate={setUpdate}/></td>
        </tr>
    )
}