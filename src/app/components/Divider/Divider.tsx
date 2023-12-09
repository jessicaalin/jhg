import Box from '@mui/material/Box';
import styles from './Divider.module.css';

interface DividerProps {
    variant?: string;
    mt?: string;
    mb?: string;
    my?: string;
    mx?: string;
}

export default function Divider({ variant, mt, mb, my, mx }: DividerProps) {
    if (variant === 'wide') {
        return (
            <Box mt={mt} mb={mb} my={my} mx={mx}>
                <div className={styles.dividerWide}></div>
            </Box>

        )
    }

    return (
        <Box mt={mt} mb={mb} my={my} mx={mx}>
            <div className={styles.divider}></div>
        </Box>
    )
}