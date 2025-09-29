import React from 'react'
import { Box, Link as MuiLink, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { fonts } from '../../../../styles/fonts'

type ContactItem = {
  label: string
  url: string
}

function ContactLinks() {
  const { t: tAbout } = useTranslation('about')
  const contacts = tAbout('contacts', { returnObjects: true }) as unknown as ContactItem[]

  return (
    <Box sx={{ mt: '24px' }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: fonts.defaultFonts,
        }}
      >
        Contact
      </Typography>
      <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', mt: '8px' }}>
        {Array.isArray(contacts) && contacts.map((c, idx) => (
          <MuiLink
            key={idx}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ fontFamily: fonts.defaultFonts, fontSize: '20px' }}
          >
            {c.label}
          </MuiLink>
        ))}
      </Box>
    </Box>
  )
}

export default ContactLinks



