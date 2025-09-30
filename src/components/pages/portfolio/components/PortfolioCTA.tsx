import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { colors } from '../../../../styles/colors'

function PortfolioCTA() {
  return (
    <Box component="section" sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ color: colors.matrixGreen, mb: 1 }}>
        Want to collaborate?
      </Typography>
      <Button variant="outlined" sx={{ color: colors.matrixGreen, borderColor: colors.matrixGreen }}>
        Get in touch
      </Button>
    </Box>
  )
}

export default PortfolioCTA


