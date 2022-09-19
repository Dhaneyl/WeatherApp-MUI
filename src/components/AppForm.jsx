import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { Countries } from '../helpers'
import { useSubmit, useWeather } from '../hooks'
import { WeatherLayout } from './layout/WeatherLayout'


export const AppForm = () => {
  
  return (
    <WeatherLayout>
    <form>
        <FormControl fullWidth >
        <TextField id="filled-basic" label="City" variant="outlined" sx={{mt:5, borderRadius:4,}}/>
        <InputLabel sx={{mt:17}}>Country</InputLabel>
        <Select
        label='Country'
        // value={}
        sx={{mt:5, borderRadius:2,}}
        >
        {Countries.map(country =>(
            <MenuItem key={country.value} value={country.value}>
                {country.label}
            </MenuItem>
        ))

        }
        </Select>
        <Button type='submit' variant='contained' sx={{mt:5, borderRadius:2,}} size='large'> Check Weather</Button>
            
        </FormControl>
    </form>
    </WeatherLayout>
    
  )
}
