import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
  var[fname,setfname] = useState("meera")
  const changeName = () =>{
    setfname("manu")
  }

  return (
    <div>
    <Typography>WELCOME{fname}</Typography>
    <br></br>
    <Button variant='contained'onClick={changeName} >change</Button>
    </div>
  )
}

export default StateBasic