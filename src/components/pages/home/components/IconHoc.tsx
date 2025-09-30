import { Box } from '@mui/material'
import { type ReactNode } from 'react'
import { colors } from '../../../../styles/colors'

function IconHoc({isTs, children}: {isTs:boolean, children: ReactNode}) {
  
    return (
    <Box sx={{
        fontSize: isTs ? "130px" : "150px",
        color: colors.matrixGreen,   
        flexShrink: "0",
        "& :hover": {
          mx: "20px",
          fontSize: isTs ? "160px" : "180px",
          transition: "font-size 300ms ease, color 300ms ease, mx 300ms ease",
          cursor: "pointer",
          color: colors.titleOrange,   
        },
    }}>
        {children}
    </Box>
  )
}

export default IconHoc;