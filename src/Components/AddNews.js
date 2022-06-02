import React, { useState } from 'react'

export const AddNews = ({setNews}) => {
    const [inputValue, setInputValue] = useState('')

  /**
   * When the input value changes, set the input value to the new value.
   * @param event - The event object is a JavaScript event that is sent to an element when an event
   * occurs on it.
   */
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

 /**
  * It takes the current value of the input and adds it to the news array.
  * @param e - the event object
  */
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(inputValue.trim().length > 2){
      setNews(news=> [...news,inputValue])
      setInputValue('');
    }
  }
    
  return (
      <form>
        <input value={inputValue} onChange={handleInputChange} type={'text'}/>
        <button id='addNotice' onClick={handleSubmit}>Agregar noticia</button>
      </form>
  )
}
