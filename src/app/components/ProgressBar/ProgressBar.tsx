import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((progress) => {
                if (progress === 100) {
                    clearInterval(timer);
                }
                const diff = Math.random() * 10;
                return Math.min(progress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 3,
        borderRadius: 15,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#E5E5E5',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 15,
            backgroundColor: '#FA9D26',
        },
    }));

    return (
        <Box sx={{ width: '100%' }}>
            <StyledLinearProgress variant="determinate" value={progress} />
        </Box>
    );
}