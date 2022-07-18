import axios from "axios"

/**
 * It's a function that receives two parameters, one is a state and the other is an id, and then it
 * makes a request to the server to update the state of the work with the id that was passed as a
 * parameter
 * @param state - string
 * @param id - string
 * @returns the promise.
 */
export const quickUpdateWorkState = async(state,id)=>{
    try {
        console.log('actualizando...')
        let save = await axios.put('http://localhost:4000/UpdateWork',{state,id})
        return save
    } catch (error) {
        console.log(error)
    }
}

/**
 * It takes in a state, id, and news and then updates the state of the work with the given id.
 * @param state - the state of the work, which is a string
 * @param id - the id of the work
 * @param news - []
 * @returns The return value is the result of the axios.put() call.
 */
export const UpdateWorkState = async(id,state, news)=>{
    try {
        let save = await axios.put('http://localhost:4000/UpdateWork',{id,state,news})
        return save
    } catch (error) {
        console.log(error)
    }
}