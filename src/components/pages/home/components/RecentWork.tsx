import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../../../styles/colors";
import { useTranslation } from "react-i18next";


function RecentWork(){
  const { t: tHome } = useTranslation("homePage")

    return (
      <Box sx={{
        px: 3,
        maxWidth: 1200,
        width: '100%',
      }}>
        <Box sx={{
          p: 4,
          borderRadius: 2,
          border: `1px solid ${colors.neonColorGreen}55`,
          background: `linear-gradient(180deg, #0c0e11 0%, #0a0b0d 100%)`,
        }}>
          <Typography variant="h5" sx={{ color: colors.neonColorGreen, fontWeight: 800 }}>
            Recent Work
          </Typography>
          <Typography variant="body1" sx={{ color: colors.descriptionCyan, mt: 1 }}>
            Explore selected projects showcasing animations, state management, and clean UI.
          </Typography>
          <Button variant="contained" sx={{ mt: 3, bgcolor: colors.matrixGreen, color: colors.mainDark, fontWeight: 700, '&:hover': { bgcolor: '#14a42a' } }} href="/portfolio">
            See Portfolio
          </Button>
        </Box>
      </Box>
    )
  }
  
  
  
export default RecentWork;  