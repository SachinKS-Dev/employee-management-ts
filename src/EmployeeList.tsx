// EmployeeList.tsx
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
} from '@mui/material';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from "./type";

function EmployeeList() {
    const employeeData = useSelector((state: RootState) => state.employees);


    return (
        <div style={{padding: '20px', maxWidth: '800px', margin: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                <Typography variant="h4" color="#305496" gutterBottom style={{fontWeight: 'bold'}}>
                    Employee Details
                </Typography>
                <Link to="/form">
                    <Button variant="contained" color="primary" style={{marginBottom: '20px'}}>
                        Add
                    </Button>
                </Link>
            </div>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{background: '#305496'}}>
                            <TableCell style={{color: 'white'}}>Employee ID</TableCell>
                            <TableCell style={{color: 'white'}}>Name</TableCell>
                            <TableCell style={{color: 'white'}}>Department</TableCell>
                            <TableCell style={{color: 'white'}}>Date Of Joining</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeData.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.id}</TableCell>
                                <TableCell>{employee.firstName} {employee.middleName} {employee.lastName}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                                <TableCell>{employee.dateOfJoining}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default EmployeeList;
