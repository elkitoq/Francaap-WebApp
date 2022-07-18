/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getWorkByState } from "../Helpers/getWorks"

/**
 * It's a custom hook that returns an object with two properties: works and loading. 
 * 
 * The works property is an array of objects that represent the works. 
 * 
 * The loading property is a boolean that indicates whether the works are being loaded or not. 
 * 
 * The hook uses the useState hook to set the initial state of the works and loading properties. 
 * 
 * The useEffect hook is used to call the getWorkByState function and set the state of the works and
 * loading properties. 
 * 
 * The getWorkByState function is an asynchronous function that returns a promise. 
 * 
 * The getWorkByState function is called with the etapa parameter. 
 * 
 * The etapa parameter is passed to the useGetWorks function. 
 * 
 * The etapa parameter is used to filter the works. 
 * 
 * The useGetWorks function is
 * @param etapa - is the state of the work, it can be "Pendiente", "En Proceso", "Finalizado"
 * @returns The state object.
 */
export const useGetWorks = (etapa, update) => {
    const [state, setState] = useState({
        works:[]
    })

  useEffect(()=>{
        getWorkByState(etapa).then(data=>{
            setState({
                works: data,
                loading: false
            })
        })
    }, [etapa,update])

    return state;
}
