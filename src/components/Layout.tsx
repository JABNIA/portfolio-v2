import { Outlet } from 'react-router-dom'
import Nav from './shared/Nav'
import { Box } from '@mui/material'

function Layout() {
  return (
    <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        overflowY: "auto",
        scrollbarWidth: "none"
    }}>
        <Nav />
        <Outlet />
    </Box>
        )
    }

export default Layout