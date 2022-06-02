import Calendar from 'react-awesome-calendar';
import { useState, useEffect } from 'react'
//import { getListJobs } from '../Service/ServiceLocalBase.js'


export const Calendario = () => {

    const [dateJobs, setDateJobs] = useState([]);

    useEffect(() => {

        // async function getJobs() {
        //     let jobs = await getListJobs();

        //     setDateJobs(jobs)
        // }

        // getJobs()

    }, [])

    return (
        <Calendar events={dateJobs}
        />
    );
}