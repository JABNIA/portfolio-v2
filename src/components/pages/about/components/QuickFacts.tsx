import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { fonts } from '../../../../styles/fonts'

function QuickFacts() {
  const { t: tAbout } = useTranslation('about')
  const facts: string[] = tAbout('quickFacts', { returnObjects: true }) as unknown as string[]

  return (
    <Box sx={{ mt: '24px' }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: fonts.defaultFonts,
        }}
      >
        Quick Facts
      </Typography>
      <Box component="ul" sx={{ pl: '20px', m: 0 }}>
        {Array.isArray(facts) && facts.map((fact, idx) => (
          <Typography key={idx} component="li" variant="body1" sx={{ fontFamily: fonts.defaultFonts, fontSize: '20px', mb: '6px' }}>
            {fact}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default QuickFacts



