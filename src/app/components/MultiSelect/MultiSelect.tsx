import * as React from 'react';
import Box from '@mui/material/Box';
import Text from '../Text/Text';
import TimeIcon from '../TimeIcon/TimeIcon';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

interface MultiSelectProps {
    number: string;
}

export default function MultiSelect({ number }: MultiSelectProps) {
    const text = `Testing Center ${number}`;
    return(
        <Box display='flex' alignItems='center' my='16px'>
            <Box mr='56px'>
                <Text variant='copy' text={text} />
            </Box>
            <FormControl
                variant="outlined"
                size="small"
                sx={{
                    '.MuiInputBase-root': {
                        width: '147px',
                        borderRadius: '10px',
                        marginRight: '12px',
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
                        fontWeight: '400'
                    },
                    '.MuiSvgIcon-root': {
                        color: '#092C4C'
                    }
                }}
            >
                <InputLabel id="select-label">Select Client {number}</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    label="Select Client"
                    IconComponent={ExpandMoreRoundedIcon}
                    defaultValue=""
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                </Select>
            </FormControl>
            <TimeIcon />
        </Box>
    )
}