import { Box } from "@mui/material";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import IconHoc from "./IconHoc";

const stylesForIcons = {
  fontSize: "150px",
  color: "#18c332",
  "& :hover": {
    fontSize: "180px",

  }
}


function TechIcons() {
  return (
    <Box
    sx={{
      height: "400px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: "0"
    }}>
      <IconHoc isTs={false}>
        <FaJsSquare />
      </IconHoc>
      <IconHoc isTs={false}>
        <FaHtml5 />
      </IconHoc>
      <IconHoc isTs={false}>
        <IoLogoCss3 />
      </IconHoc>
      <IconHoc isTs={false}>
        <FaGithub />
      </IconHoc>
      <IconHoc isTs={true}>
        <SiTypescript />
      </IconHoc>
      <IconHoc isTs={false}>
        <FaReact />
      </IconHoc>
      <IconHoc isTs={false}>
        <SiRedux />
      </IconHoc>
    </Box>
  );
}

export default TechIcons;
