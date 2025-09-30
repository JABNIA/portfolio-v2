import { Box, Button, Stack } from '@mui/material'
import { colors } from '../../../../styles/colors'

function PortfolioFilters() {
  return (
    <Box component="section" sx={{ mb: 3 }}>
      <Stack direction="row" spacing={1}>
        <Button variant="outlined" sx={{ color: colors.matrixGreen, borderColor: colors.matrixGreen }}>
          All
        </Button>
        <Button variant="outlined" sx={{ color: colors.matrixGreen, borderColor: colors.matrixGreen }}>
          Web Apps
        </Button>
        <Button variant="outlined" sx={{ color: colors.matrixGreen, borderColor: colors.matrixGreen }}>
          Libraries
        </Button>
        <Button variant="outlined" sx={{ color: colors.matrixGreen, borderColor: colors.matrixGreen }}>
          Experiments
        </Button>
      </Stack>
    </Box>
  )
}

export default PortfolioFilters


