// MyForm.tsx
import React, {useState, ChangeEvent, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {addEmployee} from './store';
import {useDispatch} from 'react-redux';
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    Button,
    Typography, SelectChangeEvent,
} from '@mui/material';
import {v4 as uuidv4} from 'uuid';

interface FormData {
    firstName: string;
    middleName: string;
    lastName: string;
    sex: string;
    department: string;
}

function MyForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        middleName: '',
        lastName: '',
        sex: '',
        department: '',
    });

    const handleChange = (e: SelectChangeEvent<string>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const employeeId = uuidv4();
        const currentDate = new Date();
        const dateOfJoining = currentDate.toLocaleString();

        const newEmployee = {
            id: employeeId,
            dateOfJoining,
            ...formData,
        };

        dispatch(addEmployee(newEmployee));
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            sex: '',
            department: '',
        });
        navigate('/');
    };

    const handleCancel = () => {
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            sex: '',
            department: '',
        });
        navigate(-1);
    };

    return (
        <div style={{padding: '20px', maxWidth: '800px', margin: 'auto'}}>
            <Typography variant="h5" color="#305496" gutterBottom style={{fontWeight: 'bold', textAlign: 'center'}}>
                EMPLOYEE DETAILS
            </Typography>
            <form>
                <hr style={{margin: '20px 0', border: '1px solid #ccc'}}/>
                <div style={{display: 'flex', margin: '20px', justifyContent: "space-between"}}>
                    <div style={{marginBottom: '20px', flexDirection: 'column', display: 'flex'}}>
                        <FormLabel>First Name</FormLabel>
                        <TextField
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleTextFieldChange}
                        />
                    </div>

                    <div style={{marginBottom: '20px', flexDirection: 'column', display: 'flex'}}>
                        <FormLabel>Middle Name</FormLabel>
                        <TextField
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleTextFieldChange}
                        />
                    </div>

                    <div style={{marginBottom: '20px', flexDirection: 'column', display: 'flex'}}>
                        <FormLabel>Last Name</FormLabel>
                        <TextField
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleTextFieldChange}
                        />
                    </div>
                </div>

                <div style={{display: 'flex', margin: '20px'}}>
                    <div style={{marginRight: '20px'}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Sex</FormLabel>
                            <RadioGroup
                                row
                                name="sex"
                                value={formData.sex}
                                onChange={handleSelectChange}
                            >
                                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div style={{flex: '1',}}>
                        <FormControl fullWidth>
                            <FormLabel component="legend">Department</FormLabel>
                            <Select
                                name="department"
                                value={formData.department}
                                onChange={handleSelectChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>Select Department</MenuItem>
                                <MenuItem value="IT">IT</MenuItem>
                                <MenuItem value="HR">HR</MenuItem>
                                <MenuItem value="Finance">Finance</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <hr style={{margin: '20px 0', border: '1px solid #ccc'}}/>

                <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px'}}>
                    <Button type="button" variant="contained" color="primary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>

            </form>
        </div>
    );
}

export default MyForm;
