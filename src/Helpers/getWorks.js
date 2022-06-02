import axios from "axios"

/**
 * It makes a post request to the server, and returns the data that the server sends back
 * @param state - String
 * @returns An array of objects.
 */
export const getWorkByState = async(state)=>{
    try {
        let {data} = await axios.post('http://localhost:4000/worksByState',{state})
        return data
    } catch (error) {
        console.log('No se pudo conectar con el servidor')
    }
}

/**
 * It takes an id as a parameter and returns the data of the work with that id
 * @param id - the id of the work
 * @returns The data from the server.
 */
export const getWorkById = async(id)=>{
    try {
        let {data} = await axios.post('http://localhost:4000/workById',{id})
        return data
    } catch (error) {
        console.log('No se pudo conectar con el servidor')
    }
}

