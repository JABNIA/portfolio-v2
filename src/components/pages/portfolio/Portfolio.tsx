import { Container, Stack } from '@mui/material'
import PortfolioHeader from './components/PortfolioHeader'
import PortfolioFilters from './components/PortfolioFilters'
import PortfolioGrid from './components/PortfolioGrid'
import PortfolioCTA from './components/PortfolioCTA'

function Portfolio() {
  return (
    <Container maxWidth="xl" sx={{
      display: "flex", 
      justifyContent: "center",
    }}>
      <Stack spacing={3}>
        <PortfolioHeader />
        <PortfolioGrid />
        <PortfolioCTA />
      </Stack>
    </Container>
  )
}

export default Portfolio