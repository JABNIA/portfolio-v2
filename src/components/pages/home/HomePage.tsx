import { Box } from '@mui/material'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import TechIcons from './components/TechIcons'
 

function HomePage() {

  return (
    <Box sx={{
      width: '1600px',
      height: '100%',
      py: 6,
      gap: 8,
      scrollbarWidth: "none",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "space-between",
      overflowY: 'auto',
    }}>
        <Hero />
        <Highlights />
        <TechIcons />
        {/* <RecentWork /> */}
      </Box>
  )
}

export default HomePage

