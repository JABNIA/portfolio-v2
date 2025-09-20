import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { colors } from "../../styles/colors";
import data from "../../../public/locales/en/portfolioMain.json";
import UiLine from "./UiLine";

function DeveloperResume() {
  const { t } = useTranslation("portfolioMain");
  const keys: string[] = Object.keys(data) as string[];

  console.log(Object.keys(data));
  return (
    <Box
      sx={{
        width: "1150px",
        minHeight: "100px",
        maxHeight: "100vh",
        p: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        border: `4px double ${colors.neonColorGreen}`,
        overflowY: "auto",
      }}
    >
      {keys.map((key) => (
        <Box
        sx={{
          p: "10px 0",
          borderBottom: `1px solid ${colors.matrixGreen}` 
        }
        }
        >
          <UiLine
            key={key}
            text={data[key as keyof typeof data].title}
            styling="title"
            vari={
              (data[key as keyof typeof data] as any).titleVariant || "body1"
            }
          />
          <UiLine
            key={key + 1}
            text={data[key as keyof typeof data].description}
            styling="description"
            vari={
              (data[key as keyof typeof data] as any).descriptionVariant ||
              "body1"
            }
          />
        </Box>
      ))}
    </Box>
  );
}

export default DeveloperResume;
