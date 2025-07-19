import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Loader: React.FC = () => {
    const theme = useTheme();
    
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                bgcolor: theme.palette.background.default,
            }}
        >
            <CircularProgress sx={{ color: theme.palette.primary.main, size: 60 }} />
        </Box>
    );
};

export default Loader;