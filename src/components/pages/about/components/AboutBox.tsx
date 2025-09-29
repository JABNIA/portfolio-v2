import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { colors } from '../../../../styles/colors'
import { fonts } from '../../../../styles/fonts'

function AboutBox({text}: {text: string}) {
  const [knowledge, setKnowledge] = useState<string>("");

  useEffect(() => {
    if(knowledge.length < text.length){

      const knowledgeSymbolArr = text.split("");
      const index = knowledge.length;
      console.log(knowledgeSymbolArr, index)
      
      const firstOne = setTimeout(() => {
        const secodTimeout = setTimeout(() => {
          setKnowledge(prev => prev + knowledgeSymbolArr[index]); 
        }, 0);
        return () => clearTimeout(secodTimeout);
      }, 5)
      return () => clearTimeout(firstOne);
    }
  }, [knowledge])

  return (
    <Typography
    variant="body1"
    sx={{
      pb: "10px",
      fontFamily: fonts.defaultFonts,
      fontSize: "24px",
      borderBottom: `1px solid ${colors.matrixGreen}`
    }}
  >
    { knowledge }
  </Typography>
  )
}

export default AboutBox