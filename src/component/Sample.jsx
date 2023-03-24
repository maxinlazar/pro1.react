import { Typography } from '@mui/material'
import React from 'react'

const Sample = () => {
    var num =[1,2,3,4,5,6,7,8,9,10]
    return (
        <div>
            {num.map((value,index)=>{
                return <Typography>number is {value}</Typography>
            })}
            
            <div>sample</div>
            <h1>hello nirmala</h1>
                    </div>
    )
}

export default Sample