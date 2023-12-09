import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioButtonsProps {
    label: string;
    optOneValue: string;
    optOneLabel: string;
    optTwoValue: string;
    optTwoLabel: string;
}

export default function RadioButtons({ label, optOneValue, optOneLabel, optTwoValue, optTwoLabel}: RadioButtonsProps) {
    return (
        <FormControl>
            <FormLabel id="row-radio-buttons-group-label"
                sx={{
                    color: '#092C4C',
                    fontSize: '14px',
                    fontWeight: '700',
                    '&.Mui-focused': {
                        color: '#092C4C',
                    },
                }}>
                {label}
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value={optOneValue} control={
                    <Radio sx={{
                        color: '#838383',
                        '& .MuiSvgIcon-root': {
                            fontSize: 29,
                        },
                        '&.Mui-checked': {
                            color: '#092C4C'
                        },
                    }} />}
                    label={optOneLabel} sx={{ color: '#092C4C', fontSize: '14px', fontWeight: '400' }} />
                <FormControlLabel value={optTwoValue} control={
                    <Radio sx={{
                        color: '#838383',
                        '& .MuiSvgIcon-root': {
                            fontSize: 29,
                        },
                        '&.Mui-checked': {
                            color: '#092C4C'
                        },
                    }} />}
                    label={optTwoLabel} sx={{ color: '#092C4C', fontSize: '14px', fontWeight: '400' }} />
            </RadioGroup>
        </FormControl>
    );
}