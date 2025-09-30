import { Box, Grid } from "@mui/material";
import PortfolioCard from "./PortfolioCard";

function PortfolioGrid() {
  const items = [
    {
      title: "Audiophile",
      description: "Short description",
      link: "https://jabnia.github.io/audiophile/",
      image: "./src/assets/images/audiophile.jpeg",
    },
    {
      title: "Entertaiment Webpage",
      description: "Short description",
      link: "https://jabnia.github.io/entertaiment-webpage/",
      image: "./src/assets/images/entertaiment-webpage.png",
    },
    {
      title: "Password Generator",
      description: "Short description",
      link: "https://jabnia.github.io/password-generator/",
      image: "./src/assets/images/password-generator.png",
    },
    {
      title: "DevFinder",
      description: "Short description",
      link: "https://jabnia.github.io/dev-finder/",
      image: "./src/assets/images/dev-finder.png",
    },
    {
      title: "Rating App",
      description: "Short description",
      link: "https://jabnia.github.io/rating-app/",
      image: "./src/assets/images/rating-app.png",
    },
    {
      title: "Tip Calculator",
      description: "Short description",
      link: "https://jabnia.github.io/tip-calculator/",
      image: "./src/assets/images/tip-calculator.png",
    },
    {
      title: "Custom Card",
      description: "Short description",
      link: "https://jabnia.github.io/custom-card/",
      image: "./src/assets/images/custom-card.png",
    },
    {
      title: "A.M. Therapy",
      description: "Short description",
      link: "https://am-therapy.netlify.app/",
      image: "./src/assets/images/am-terapy.png",
    },
  ];

  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Box>
          <PortfolioCard
            title={item.title}
            description={item.description}
            link={item.link}
            image={item.image}
          />
        </Box>
      ))}
    </Grid>
  );
}

export default PortfolioGrid;
