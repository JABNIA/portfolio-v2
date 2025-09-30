import React, { type ReactNode } from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

const linkStyle = {
    display: "flex",
    alignItems: "center",
  fontFamily: fonts.defaultFonts,
  fontSize: "24px",
};

function NavItem({
  portfolioPage,
  navText,
  component,
}: {
  portfolioPage: string;
  navText: string;
  component: ReactNode;
}) {
  const { t: tNav } = useTranslation("navigation");

  return (
    <ListItemButton
      component={NavLink}
      to={portfolioPage}
      sx={{
        display: "flex",
        alignItems: "center",
        color: colors.matrixGreen,
        gap: "12px",
        borderRadius: "12px",
        mb: "6px",
        transition: "color 300ms ease, box-shadow 300ms ease, background-size 300ms ease",
        backgroundImage: "linear-gradient(#18c332, #18c332)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        backgroundSize: "0%, 100%",
        "&:hover": {
          color: colors.mainDark,
          backgroundSize: "100%, 100%",
          boxShadow: "0 2px 12px #18c332"
        },
        "&.active": {
          color: colors.mainDark,
          backgroundSize: "100%, 100%",
          boxShadow: "0 2px 12px rgba(24,195,50,0.35)",
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: "28px", color: "inherit" }}>
        {component}
      </ListItemIcon>
      <ListItemText
        sx={{
          "& .MuiListItemText-primary": {
            ...linkStyle,
            color: "inherit",
          },
        }}
        primary={tNav(navText)}
      />
    </ListItemButton>
  );
}

export default NavItem;
