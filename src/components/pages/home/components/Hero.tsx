import { Box, Button, Stack, Typography } from "@mui/material";
import { colors } from "../../../../styles/colors";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fonts } from "../../../../styles/fonts";

function Hero() {
  const { t: tHome} = useTranslation("homePage");


  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      alignItems="center"
      sx={{ px: 3, maxWidth: 1200, width: "100%" }}
    >
      <Box sx={{ flex: 1, minWidth: 280 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            lineHeight: 1.1,
            color: colors.matrixGreen,
            fontFamily: fonts.defaultFonts
          }}
        >
          { tHome("me") }
        </Typography>

        <Typography variant="h5" sx={{ mt: 2, color: colors.matrixGreen, fontFamily: fonts.defaultFonts }}>
          { tHome("aboutMe") } 
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <NavLink to="/portfolio">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: colors.matrixGreen,
                color: colors.mainDark,
                fontFamily: fonts.defaultFonts,
                fontWeight: 700,
                "&:hover": { bgcolor: "#14a42a" },
              }}
            >
          { tHome("viewPortfolio") }
            </Button>
          </NavLink>
          <NavLink to="/resume">
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: colors.matrixGreen,
                color: colors.matrixGreen,
                fontWeight: 700,
                fontFamily: fonts.defaultFonts,
                "&:hover": {
                  borderColor: colors.neonColorGreen,
                  color: colors.neonColorGreen,
                },
              }}
            >
              { tHome("seeResume") }
            </Button>
          </NavLink>
        </Stack>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          minWidth: 280,
        }}
      >
        <Box
          sx={{
            width: 260,
            height: 260,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: `0 0 0 6px ${colors.mainDark}, 0 0 40px ${colors.matrixGreen}`,
            border: `2px solid ${colors.matrixGreen}`,
          }}
        >
          <img
            src="./src/assets/images/avatar.jpeg"
            alt="Portrait"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Stack>
  );
}

export default Hero;
