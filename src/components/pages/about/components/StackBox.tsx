import { Box, Typography } from '@mui/material'
import Technologyes from './Technologies'
import { fonts } from '../../../../styles/fonts'

function StackBox() {
  return (
    <Box
    sx={{
        mt: "40px"
    }}>
    <Typography
      variant="h2"
      sx={{
        fontFamily: fonts.defaultFonts,
      }}
    >
      Technologies:
    </Typography>
    <Technologyes />
  </Box>
  )
}

export default StackBox;