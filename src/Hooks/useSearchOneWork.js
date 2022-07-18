/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getWorkById} from "../Helpers/getWorks"

export const useSearchOneWork = (etapa) => {
    const [state, setState] = useState({
        work:{},
        loading : true
    })

  useEffect(()=>{
        getWorkById(etapa).then(data=>{
            setState({
                work: data,
                loading: false
            })
        })  
        
    }, [etapa])

    return state;
}
