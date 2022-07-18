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

// get list works for calendar
export async function getListJobs() {
    try {
        let {data} = await axios.get('http://localhost:4000/getWorks')
        let jobs = []
        data.map(work => {
            if (work.state === '1') {
                let workDate = {
                    id: work.id,
                    color: '#f9b208',
                    from: Date(work.date),
                    to: work.deliveryDate,
                    title: `${work.name} // ${work.device} // En Espera`
                }

                jobs.push(workDate)
            } else if (work.state === '2') {
                let workDate = {
                    id: work.id,
                    color: 'rgb(75 203 105)',
                    from: Date(work.date),
                    to: work.deliveryDate,
                    title: `${work.name} // ${work.device} // En Progreso`
                }

                jobs.push(workDate)
            }
            else if (work.state === '3') {
                let workDate = {
                    id: work.id,
                    color: '#1ccb9e',
                    from: Date(work.date),
                    to: work.deliveryDate,
                    title: `${work.name} // ${work.device} // Terminado`
                }

                jobs.push(workDate)
            } 
            return null
        })

        return jobs
    }
    catch (error) {
        console.log('error: ', error)
    }
}


