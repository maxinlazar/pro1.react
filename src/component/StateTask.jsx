import { Typography, Button} from '@mui/material'
import React, { useState } from 'react'

const StateTask = () => {
    var [pagename,setfname] = useState("")
    const changeHome= () => {
        setfname('Home Page')
    }
    const changegallery = () => {
        setfname("Gallery page")
    }
    const changePage = () => {
        setfname("contact page")


    }

  return (
    <div>
        <br></br>
        <Button variant='contained' color='primary'onClick={changeHome}>Home Page</Button>
        <Button variant='contained' color='secondary'onClick={changegallery}>Gallery page</Button>
        <Button variant='contained' color='error'onClick={changePage}>contact page</Button>
        <Typography>welcome to {pagename}</Typography>

    </div>
  )
}

export default StateTask