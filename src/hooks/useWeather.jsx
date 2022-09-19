import React, { useContext } from 'react'
import { weatherContext } from '../context'

export const useWeather = () => {
  return (
    useContext(weatherContext)
  )
}
