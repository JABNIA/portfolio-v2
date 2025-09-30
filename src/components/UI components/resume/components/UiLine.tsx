import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { colors } from "../../../../styles/colors";


function UiLine({ text, styling, vari }: { text: string; styling: string, vari: any }) {
  const [propText, setPropText] = useState<string>("")
  
  useEffect(() => {
    if(text.length > propText.length){
      const textSymbols = text.split("");
      const index = propText.length;

      const addTextTimeout = setTimeout(() => {
        const nestedTimeout = setTimeout(() => {

          setPropText(prev => prev + textSymbols[index])
          
          return clearTimeout(nestedTimeout)
        }, 5)
      }, 20)
      return () => clearTimeout(addTextTimeout)
    }
  }, [propText]) 


  return (
      <Typography
        variant={vari}
        sx={{
          margin: styling === "title" ? "0" : "0 0 0 16px",
          fontSize: styling === "title" ? "24px" : "16px",
          fontFamily: "LCD2, Arial, Helvetica, sans-serif",
          fontWeight: styling === "title" ? "bold" : "normal",
          color: colors.matrixGreen,
        }}
      >
        {text === "socials" ? 
        <>
        <a href="https://www.linkedin.com/in/jabniashvili-vakho-97b676235/" target="_blank" className="resume-link">Linked in</a>/
        <a href="https://github.com/JABNIA?tab=repositories" target="_blank" className="resume-link">GitHub</a>/
        <a href="https://www.facebook.com/vaxo.jabniashvili" target="_blank" className="resume-link">Facebook</a>
        </>
        : propText}
        {propText.length < text.length ? <span className="rect"></span> : null}
      </Typography>
  );
}

export default UiLine;
