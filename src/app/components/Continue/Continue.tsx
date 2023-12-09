import Text from '../Text/Text';
import Box from '@mui/material/Box';
import Button from '../Button/Button';

export default function Continue() {
    return (
        <Box mt='40px'>
            <Text variant='heading' text='Data in the import file is correct. Please press Continue to import.' />
            <Box width='520px' mt='30px' mx='auto' display='flex' justifyContent='space-between' >
                <Button variant='continue' text='Continue Import' />
                <Button variant='cancel' text='Cancel' />
            </Box>
        </Box>

    )
}