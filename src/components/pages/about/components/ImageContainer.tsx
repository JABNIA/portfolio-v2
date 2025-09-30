import { colors } from '../../../../styles/colors'
import { Box, Typography } from '@mui/material'

function ImageContainer() {
  return (
    <Box>
    <Box
        sx={{
          height: "400px",
          float: "left",
          mr: "20px",
          mb: "40px",
          border: `5px double ${colors.matrixGreen}`,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: "0",
          flexGrow: "0",
        }}
      >
        <img
          src="./src/assets/images/avatar.jpeg"
          alt="avatar"
          style={{ width: "400px", height: "400px", objectFit: "cover" }}
        />
      </Box>
        <Typography variant='h4'>
            Card No: ***********
        </Typography>
    </Box>

  )
}

export default ImageContainer