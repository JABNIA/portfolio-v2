import { Box } from "@mui/material"
import { colors } from "./styles/colors"
import Main from "./components/pages/main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./components/pages/HomePage"
function App() {


  return (
    <Box
    sx={{
      width: '1400',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.mainDark,
      boxShadow: `inset 0 0 40px ${colors.neonColorGreen}`,
      color: colors.neonColorGreen,
    }}
    >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/resume" element={<Main />} />
        </Route>
      </Routes>
      </BrowserRouter>
      
    </Box>
  )
}

export default App
