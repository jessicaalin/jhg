import Text from '../Text/Text';
import Box from '@mui/material/Box';

interface CheckProps {
    variant: string;
}

export default function Check({ variant }: CheckProps) {
    let label = '';
    let text = '';
    if (variant === 'elapse') {
        label = 'Elapse Data Checking:';
        text = 'No Elapsed Dates!';
    }
    if (variant === 'location') {
        label = 'Location Checking:';
        text = 'All Available!';
    }
    return (
        <Box height="48px" display="flex" flexDirection="column" justifyContent="space-between">
            <Text variant='label' text={label} />
            <Text variant='copy-success' text={text} />
        </Box>   
    )
}