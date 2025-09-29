import { Box, Typography } from "@mui/material";
import { type ReactNode } from "react";
import { colors } from "../../../../styles/colors";
import { fonts } from "../../../../styles/fonts";

interface Card {
  card: {
    title: string;
    desc: string;
    image: string;
  };
}

function Card({ card }: Card) {
  return (
    <Box
      sx={{
        width: "350px",
        minHeight: "500px",
        p: "32px 10px",
        border: `2px solid ${colors.matrixGreen}`,
        boxShadow: `0 0 10px ${colors.matrixGreen}`,
        borderRadius: "8px",
        backgroundColor: colors.matrixGreen,
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        gap: "100px",
        background: `linear-gradient(${colors.matrixGreen} 0%, ${colors.mainDark} 70%)`,
        cursor: "pointer",
        transition: "transform 200ms ease",
        "&:hover": {
          transform: "translateY(-30px)",
          boxShadow: `0 0 30px ${colors.matrixGreen}`,

        }
      }}
    >
      <img src={card.image} alt="card icon" className="svg-icon" />
      <Box
        sx={{
          flex: 1,
          p: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: fonts.defaultFonts, color: colors.titleOrange, fontWeight: 800 }}
        >
          {card.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: fonts.defaultFonts, color: colors.matrixGreen, mt: 1 }}
        >
          {card.desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default Card;
