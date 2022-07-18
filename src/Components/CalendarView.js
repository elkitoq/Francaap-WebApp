import Calendar from 'react-awesome-calendar';
import { useState, useEffect } from 'react'
import { getListJobs } from '../Helpers/getWorks'


export const Calendario = () => {

    const [dateJobs, setDateJobs] = useState([]);

    async function getJobs() {
        let jobs = await getListJobs();
        setDateJobs(jobs)
   }


    useEffect(() => {
         getJobs()
    }, [dateJobs])

    return (
        <Calendar events={dateJobs}
        />
    );
}