import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import UiLine from "./components/UiLine";

const typographyStyles = {
  fontSize: "18px",
  fontFamily: fonts.defaultFonts,
  color: colors.matrixGreen,
};

function DeveloperResume() {
  const { t: tResume } = useTranslation("portfolioMain");

  return (
    <Box
      sx={{
        width: "1150px",
        minHeight: "100px",
        maxHeight: "95vh",
        margin: "auto",
        p: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        border: `4px double ${colors.matrixGreen}`,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(2px)",
        boxShadow: `0 0 20px ${colors.matrixGreen}33`,
        overflowY: "auto",
        scrollbarWidth: "none",
        fontSize: "18px",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <UiLine vari="h6" styling="title" text={`Name: ${tResume("name")}`} />
        <UiLine vari="body1" styling="line" text={`Location: ${tResume("location")}`} />
        <UiLine vari="body1" styling="line" text={`Email: ${tResume("email")}`} />
        <UiLine vari="body1" styling="line" text={`Phone: ${tResume("phoneNumber")}`} />
        {/* special-case social links handled inside UiLine */}
        <UiLine vari="body1" styling="line" text={"socials"} />
      </Box>

      {/* Divider */}
      <Box sx={{ borderBottom: `1px solid ${colors.matrixGreen}55`, my: "4px" }} />

      {/* Tech Stack */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <UiLine vari="h6" styling="title" text={`Tech-stack: ${tResume("stackTitle")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("stackDescription")}`} />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
           
            <UiLine vari="body1" styling={""} text={`— ${tResume("techSkillsTitle")}`} />

            <Box sx={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", color: colors.matrixGreen }}>
              <FaHtml5 size={42} />
              <IoLogoCss3 size={42} />
              <SiMui size={42} />
              <FaJsSquare size={42} />
              <SiTypescript size={38} />
            </Box>

            <UiLine vari="body1" styling={""} text={`— ${tResume("frontEnd")}`} />

          </Box>

          <Box sx={{ mt: "33px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", color: colors.matrixGreen }}>
              <FaReact size={42} />
              <SiRedux size={42} />
              <SiReactrouter size={42} />
              <FaGithub size={42} />
            </Box>
            
            <UiLine vari="body1" styling={""} text={`— ${tResume("framework")}`} />
            
          </Box>
        </Box>

        <Typography variant="body1" sx={typographyStyles}>
          {tResume("tools")}
        </Typography>
      </Box>

      {/* Divider */}
      <Box sx={{ borderBottom: `1px solid ${colors.matrixGreen}55`, my: "4px" }} />

      {/* Soft Skills */}
      <UiLine vari="h6" styling="title" text={`Soft Skills`} />
      <Typography variant="body1" sx={typographyStyles}>
        {tResume("softSkills")}
      </Typography>

      {/* Projects */}
      <UiLine vari="h6" styling="title" text={`${tResume("projects")}:`} />
      <Typography variant="body1" sx={typographyStyles}>{tResume("projectsDescription")}</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <UiLine vari="body1" styling={""} text={`— ${tResume("kingsMane")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("reactApps")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("passGenerator")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("audiophile")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("entertaiment")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("others")}`} />
      </Box>

      {/* Divider */}
      <Box sx={{ borderBottom: `1px solid ${colors.matrixGreen}55`, my: "4px" }} />

      {/* Education */}
      <UiLine vari="h6" styling="title" text={`${tResume("education")}`} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <UiLine vari="body1" styling={""} text={`— ${tResume("degree")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("university")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("certification")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("programmingWithReact")}`} />
        <UiLine vari="body1" styling={""} text={`— ${tResume("itvet")}`} />
      </Box>

      {/* Languages */}
      <UiLine vari="h6" styling="title" text={`${tResume("languages")}`} />
    </Box>
  );
}

export default DeveloperResume;
