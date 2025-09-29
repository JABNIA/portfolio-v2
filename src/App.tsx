import { Box } from "@mui/material";
import { colors } from "./styles/colors";
import Resume from "./components/pages/resume/resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/pages/home/HomePage";
import About from "./components/pages/about/About";
import Portfolio from "./components/pages/portfolio/Portfolio";

const boxStyle = { 
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "flex-start",
  gap: "25px",
  backgroundColor: colors.mainDark,
  boxShadow: `inset 0 0 40px ${colors.matrixGreen}`,
  color: colors.neonColorGreen,
  scrollbarWidth: "none"
}

function App() {
  return (
    <Box
      sx={{...boxStyle}}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
