import React from 'react'
import AboutBox from './AboutBox'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

function Technologyes() {
  const { t: tAbout } = useTranslation("about");
  
  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        
    }}
    >
        <AboutBox text={tAbout("frontend")}/>
        <AboutBox text={tAbout("frameworks/libraries")}/>
        <AboutBox text={tAbout("tools")}/>
    </Box>
  )
}

export default Technologyes