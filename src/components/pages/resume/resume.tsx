import { Box } from "@mui/material";
import DeveloperResume from "../../UI components/resume/DeveloperResume";

function Resume() {
  return (
    <Box
      sx={{ margin:"auto", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <DeveloperResume />
    </Box>
  );
}

export default Resume;
