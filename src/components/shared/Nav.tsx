import { List, Typography, Box } from "@mui/material";
import { colors } from "../../styles/colors";
import HomeIcon from '@mui/icons-material/Home';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import NavItem from "./NavItem";
import { fonts } from "../../styles/fonts";

const navStyle = {
  color: "inherit", 
  fontSize: "36px"
}

function Nav() {
  return (
    <Box sx={{
      width: "260px",
      margin: "20px 0 0 20px",
      flexGrow: "0",
      flexShrink: "0",
    }}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: colors.matrixGreen,
        mb: "10px"
      }}>
        <Typography variant="h5" sx={{ fontSize: "32px", fontFamily: fonts.defaultFonts }}>
          Navigation
        </Typography>
      </Box>
      <List sx={{
        width: "100%",
        p: "10px",
        border: `5px double ${colors.matrixGreen}`,
        borderRadius: "16px",
        background: "linear-gradient(180deg, rgba(24,195,50,0.08) 0%, rgba(24,195,50,0.02) 100%)",
      }}>
        <NavItem portfolioPage="/" navText="home" component={<HomeIcon sx={ navStyle }/>} />
        <NavItem portfolioPage="/about" navText="about" component={<HelpCenterIcon sx={ navStyle }/>} />
        <NavItem portfolioPage="/portfolio" navText="portfolio" component={<WorkIcon sx={ navStyle }/>} />
        <NavItem portfolioPage="/resume" navText="resume" component={<FolderIcon sx={ navStyle }/>} />
      </List>
    </Box>
  );
}

export default Nav;
