import { Stack } from "@mui/material";
import Card from "./Card";

const cardInfo = [ {
  title: "Performance",
  desc: "I create fast and responsive applications with modern libraries and techniques. Design patterns help me quickly choose approaches.",
  image: "./assets/icons/performance.svg"
},
{
  title: "Responsiveness",
  desc: "I create applications for all platforms, regardless of screen size. Be it mobile, tablet, or PC.",
  image: "./assets/icons/responsive.svg"

},
{
  title: "Multy Functional",
  desc: "The applications are loaded with functions and havee many ways to utilize them",
  image: "./assets/icons/squares.svg"
},]


function Highlights() {
  return (
    <Stack direction={{xs: "column", sm: "row"}} spacing={10}>
      {cardInfo.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </Stack>
  );
}

export default Highlights;
