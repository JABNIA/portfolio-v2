import React from 'react';
import { Box } from '@mui/material';
import DeveloperResume from '../UI components/DeveloperResume';

import data from "../../../public/locales/en/portfolioMain.json"



function Main() {
    
    return (
      <Box sx={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <DeveloperResume />
        
      </Box>
  )
}

export default Main
