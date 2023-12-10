import Text from '../Text/Text';
import Box from '@mui/material/Box';
import ContinueButton from '../Button/ContinueButton';
import CancelButton from '../Button/CancelButton';

export default function Continue() {
    return (
        <Box mt='40px'>
            <Text variant='heading' text='Data in the import file is correct. Please press Continue to import.' />
            <Box width='520px' mt='30px' mx='auto' display='flex' justifyContent='space-between' >
                <ContinueButton />
                <CancelButton />
            </Box>
        </Box>

    )
}