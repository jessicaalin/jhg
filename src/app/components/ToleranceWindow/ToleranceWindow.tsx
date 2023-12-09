import Switch from '../Switch/Switch';
import Text from '../Text/Text';
import Box from '@mui/material/Box';
import TimeIcon from '../TimeIcon/TimeIcon';
import styles from './ToleranceWindow.module.css';

export default function ToleranceWindow() {
    return (
        <Box display="flex" flexDirection="column">
            <Text variant='label' text='Tolerance Window:' />
            <Box display="flex" flexDirection="row" alignItems="center">
                <Switch />
                <div className={styles.divider}></div>
                <TimeIcon />
                <Text variant='copy' text='Select Tolerance Level' />
            </Box>
        </Box>

    )
}