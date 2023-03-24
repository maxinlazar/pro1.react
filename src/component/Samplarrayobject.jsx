import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Samplarrayobject = () => {
    var pname = [{ name: "Maxin", age: 20, place: "meladoor" },
    { name: "manu", age: 19, place: "Munnar" }]

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pname.map((value, index) => {
                        return <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.age}</TableCell>
                            <TableCell>{value.place}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Samplarrayobject