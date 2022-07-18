import { useState } from 'react';
import {useGetWorks} from '../Hooks/useGetWorks'
import { TableBody } from './TableBody'


export const AddWorkToTable = ({state}) => {
    const [update, setUpdate] = useState(false)
    const {works = []} = useGetWorks(state,update);

     return (
        <>
            {works.length === 0 || works === undefined ? 
                <p className='p-noWorks'>No hay trabajos en esta estapa</p> :
                <tbody className='tbody'>{works.map(datos => (<TableBody key={datos.id} props={datos} setUpdate={setUpdate}/>))}</tbody>
            }
        </>
    )
}
