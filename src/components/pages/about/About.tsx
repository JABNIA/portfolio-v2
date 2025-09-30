import { useEffect, useState } from "react";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";
import { useTranslation } from "react-i18next";
import Technologies from "./components/Technologies";
import DescriptionBox from "./components/DescriptionBox";
import StackBox from "./components/StackBox";
import ImageContainer from "./components/ImageContainer";
import QuickFacts from "./components/QuickFacts";
import ContactLinks from "./components/ContactLinks";
import { Box, Typography } from "@mui/material";

function About() {
  const [name, setName] = useState("");

  const { t: tAbout } = useTranslation("about");

  useEffect(() => {
    if (name.length < tAbout("name").length) {
      const nameArr = tAbout("name").split("");
      const nameIndex = name.length;
      var nameTimer = setTimeout(() => {
        const nameSecondTimeout = setTimeout(() => {
          setName((prev) => prev + nameArr[nameIndex]);
        }, 0);
        return () => clearTimeout(nameSecondTimeout);
      }, 5);
    }
    return () => {
      clearTimeout(nameTimer);
    };
  }, [name]);
  return (
    <Box
      sx={{
        width: "1600px",
        height: "90vh",
        border: `5px double ${colors.matrixGreen}`,
        borderRadius: "50px",
        mt: "20px",
        p: "32px",
        color: colors.matrixGreen,
        overflow: "auto",
        display: "flex",
      }}
    >
      <ImageContainer />
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontFamily: fonts.defaultFonts,
            color: "inherit",
          }}
        >
          Developer Card
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: fonts.defaultFonts,
            fontSize: "32px",
          }}
        >
          {name}
        </Typography>
        <StackBox />
        <DescriptionBox />
        <Technologies />
        <QuickFacts />
        <ContactLinks />
      </Box>
    </Box>
  );
}

export default About;
