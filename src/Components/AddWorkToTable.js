import { useEffect } from 'react';
import {useGetWorks} from '../Hooks/useGetWorks'
import { TableBody } from './TableBody'


export const AddWorkToTable = ({state}) => {
 
    const {works = [], loading} = useGetWorks(state);
    
    useEffect(() => {
        
    }, [works])
    

    return (
        <>
            {works.length === 0 || works === undefined ? <p className='p-noWorks'>No hay trabajos en esta estapa</p> : <tbody className='tbody'>{works.map(datos => (<TableBody key={datos.id} props={datos} />))}</tbody>}
        </>
    )
}
