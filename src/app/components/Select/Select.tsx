"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export default function BasicSelect() {
    const [importName, setImportName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setImportName(event.target.value as string);
    };

    return (
        <Box sx={{ width: 504 }} >
            <FormControl
                variant="outlined"
                fullWidth
                size="small"
                sx={{
                    '.MuiInputBase-root': {
                        borderRadius: '10px',
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#DCDDE1'
                    },
                    '.MuiOutlinedInput-notchedOutline:hover': {
                        borderColor: '#092C4C'
                    },
                    '.MuiFormLabel-root': {
                        color: '#092C4C',
                        fontSize: '14px',
                        fontWeight: '700'
                    },
                    '.MuiSvgIcon-root': {
                        color: '#092C4C'
                    }
                }}
            >
                <InputLabel id="select-label">Select Import Name:</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={importName}
                    label="Select Import Name:"
                    onChange={handleChange}
                    IconComponent={ExpandMoreRoundedIcon}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Import One">Import One</MenuItem>
                    <MenuItem value="Import Two">Import Two</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}