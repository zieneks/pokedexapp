import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                bgcolor: '#f6f8fc',
            }}
        >
            <CircularProgress sx={{ color: '#3b4cca', size: 60 }} />
        </Box>
    );
};

export default Loader;