import React from 'react'
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import { colors } from '../../../../styles/colors'
import { NavLink } from 'react-router-dom'

type PortfolioCardProps = {
  title: string
  description: string
  link: string
  image: string
}

const buttonStyles = {
  width: "350px",
  height: "50px",
  mx: "0",
  backgroundColor: colors.matrixGreen,
  color: colors.mainDark,
  "&:hover": {
    backgroundColor: colors.mainDark,
    border: `1px solid ${colors.matrixGreen}`,  
    color: colors.matrixGreen,
}
}


function PortfolioCard({ title, description, link, image }: PortfolioCardProps) {
  return (
    <Card variant="outlined" sx={{
      borderColor: colors.matrixGreen,
      background: `linear-gradient(${colors.matrixGreen} 0%, ${colors.mainDark} 86%)`,
      borderRadius: "15px",
      boxShadow: `0 0 20px ${colors.matrixGreen}`,
      py: "32px",
      px: "8px"
    }}>
      <CardContent
      sx={{
        p: "0"
      }}
      >
        <Box>
          <img src={image} alt="project image" style={{
            width: "390px",
            height: "260px",
            borderRadius: "10px",
          }}/>
        </Box>
        <Typography variant="h6" sx={{ color: colors.matrixGreen }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: colors.matrixGreen }}>
          {description}
        </Typography>
      </CardContent>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        }}>
        <Button sx={{...buttonStyles}}>
          <NavLink to={link} style={{
            textDecoration: "none"
          }}>
          Visit
          </NavLink>
        </Button>
        <Button sx={{...buttonStyles}}>
          Source
        </Button>
      </Box>
    </Card>
  )
}

export default PortfolioCard


