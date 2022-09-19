import React, { useState } from 'react'
import { useWeather } from './useWeather'

export const useSubmit = () => {
  const [alert, setAlert] = useState()
  const [search, consultWeather] = useWeather()

  const handleSubmit= (event) =>{
    event.preventDefault()

    if(Object.values(search).includes('')){
        setAlert('*All fields are required*')
    }
    setAlert('')
    consultWeather(search)
  }
  
    return {
        alert,
        handleSubmit
    }
}
