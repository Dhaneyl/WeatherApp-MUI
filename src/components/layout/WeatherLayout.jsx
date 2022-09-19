import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

const drawerWidth = 0;

export const WeatherLayout = ({children}) => {
  return (
    <>
    <AppBar position='fixed' color='primary'sx = {{ width: { sm: `calc(100% - ${ drawerWidth}px)`}, ml: { sm: `${drawerWidth}px`}} }>
    <Toolbar>
          <Grid container direction='row' alignItems='center' justifyContent='center' sx={{margin:3}}>
            <Typography variant='h2' noWrap> Weather Finder</Typography>
          </Grid>
        </Toolbar>
    </AppBar>
    <Grid container spacing={2}  direction = "column"
    alignItems="space-around"
    justifyContent="center"
    sx={{ minHeight: '100vh', padding: 6, backgroundColor:'#f1f5f9',
    }}
    >
      <Grid item 
     className='box-shadow'
     justifyContent="center"
     xs = {6}
     sx = {{width:{md:450}, backgroundColor:'white',padding: 4, borderRadius:4, 
     ml:20, mt:15,
     }}
    >
    <Typography variant='h5' sx={{mb: 1}}> </Typography>
     
     {children}
    </Grid>
        
    </Grid>

    </>
  )
}
