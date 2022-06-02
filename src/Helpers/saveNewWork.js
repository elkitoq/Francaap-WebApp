import axios from "axios"

/**
 * It saves a new work to the database, and returns the data and the id of the new work.
 * @param newWork - {
 * @returns An object with two properties: data and id.
 */
export const saveNewWork = async(newWork)=>{
    newWork = { 
        id:makeid(),
        date: formatDate(),
        ...newWork
    }

    let checkid = await checkById(newWork.id);

    while (checkid === true) {
        newWork.id = makeid();
        checkid = await checkById(newWork.id)
    }

    let save = await axios.post('http://localhost:4000/newWork',newWork)
       
    let response={
        data: save.data,
        id: newWork.id
    }

    return response
}

/**
 * It takes the current date, formats it, and returns it.
 * @returns A string with the date in the format of dd-mm-yyyy
 */
const formatDate = ()=>{

    let date = new Date();

    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()

    return formatted_date;
}
 
//function create id
/**
 * It creates a random string of 5 characters from the alphabet and numbers.
 * @returns A string of 5 random characters.
 */
function makeid() {
    let length = 5
    var result = [];
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

//search id in the data base
/**
 * It takes an id, sends it to the server, and returns true if the id exists in the database, and false
 * if it doesn't.
 * @param id - the id of the work
 * @returns A promise.
 */
async function checkById(id) {

   try {
    let {data} = await axios.post('http://localhost:4000/works',id)
    if (data === true) {
        return true
    }
    else {
        return false
    }
   } catch (error) {
     console.log(error)
   }
}