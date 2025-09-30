import { Box, Button, Typography } from '@mui/material'
import { colors } from '../../../../styles/colors'
import { fonts } from '../../../../styles/fonts'

function PortfolioCTA() {
  return (
    <Box component="section" sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ fontFamily: fonts.defaultFonts, color: colors.matrixGreen, mb: 1 }}>
        Want to collaborate?
      </Typography>
      <Button variant="outlined" sx={{ fontFamily: fonts.defaultFonts, color: colors.matrixGreen, borderColor: colors.matrixGreen }}>
        Get in touch
      </Button>
    </Box>
  )
}

export default PortfolioCTA


