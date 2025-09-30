import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fonts } from "../../../../styles/fonts";

function describtionBox() {
  const [describtion, setDescribtion] = useState("");

  const { t: tAbout } = useTranslation("about");

  useEffect(() => {
    if (describtion.length < tAbout("about").length) {
      const aboutArr = tAbout("about").split("");
      const aboutIndex = describtion.length;
      var aboutTimer = setTimeout(() => {
        const aboutSecondTimeout = setTimeout(() => {
          setDescribtion((prev) => prev + aboutArr[aboutIndex]);
        }, 0);
        return () => clearTimeout(aboutSecondTimeout);
      }, 5);
    }

    return () => {
      clearTimeout(aboutTimer);
    };
  }, [describtion]);

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontFamily: fonts.defaultFonts,
          color: "inherit",
        }}
      >
        About Me{" "}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          minHeight: "300px",
          mb: "30px",
          fontFamily: fonts.defaultFonts,
          fontSize: "24px",
        }}
      >
        {describtion}
      </Typography>
    </Box>
  );
}

export default describtionBox;
