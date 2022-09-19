import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { cuteTheme } from './cuteTheme'


export const WeatherAppTheme = ({children}) => {
  return (
    <ThemeProvider theme={cuteTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
