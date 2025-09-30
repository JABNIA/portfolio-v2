import { Box, Typography } from "@mui/material";
import { colors } from "../../../../styles/colors";
import { fonts } from "../../../../styles/fonts";

function PortfolioHeader() {
  return (
    <Box component="header" sx={{ mb: 3 }}>
      <Typography
        variant="h3"
        sx={{ fontFamily: fonts.defaultFonts, color: colors.matrixGreen }}
      >
        Portfolio
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontFamily: fonts.defaultFonts, color: colors.matrixGreen }}
      >
        Selected projects and experiments
      </Typography>
    </Box>
  );
}

export default PortfolioHeader;
