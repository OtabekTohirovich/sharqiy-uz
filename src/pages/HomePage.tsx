import { Grid, Stack } from "@mui/material";
import CardComponent from "../components/Card";

const HomePage = () => {
  return (
    <Stack
      sx={{
        width: {
          xs: "90%",
          sm: "420px",
          md: "470px",
          lg: "490px",
          xl: "440px",
        },
        margin: "auto",
        height: "92.5vh",
        overflowX: "hidden",
        paddingBottom: "75px",
        paddingTop: "10px",
      }}
    >
      <Grid container spacing={2}>
      <Grid item xs={6}><CardComponent /></Grid>
        <Grid item xs={6}><CardComponent /></Grid>
      </Grid>
      
    </Stack>
  );
};

export default HomePage;
