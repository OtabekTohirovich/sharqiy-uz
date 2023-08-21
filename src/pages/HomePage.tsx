import { Grid, Skeleton, Stack } from "@mui/material";
import CardComponent from "../components/Card";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [change, setChange] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 3000);
  }, []);
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
        <Grid item xs={6}>
          <CardComponent />
        </Grid>
        <Grid item xs={6}>
          <CardComponent />
        </Grid>
      </Grid>
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          gap: "5px",
        }}
      >
        {change ? (
          <Skeleton variant="rectangular" width={140} height={220} />
        ) : (
          <div>
            <ReactPlayer
              controls
              width={140}
              height={220}
              url={"https://www.youtube.com/shorts/Q5PdKRybtbQ"}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
                facebook: {
                  appId: "12345",
                },
              }}
            />
          </div>
        )}

        {change ? (
          <Skeleton variant="rectangular" width={140} height={220} />
        ) : (
          <div>
            <ReactPlayer
              controls
              width={140}
              height={220}
              url={"https://www.youtube.com/shorts/JtTHZT3LF08"}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
                facebook: {
                  appId: "12345",
                },
              }}
            />
          </div>
        )}

        {change ? (
          <Skeleton variant="rectangular" width={140} height={220} />
        ) : (
          <div>
            <ReactPlayer
              controls
              width={140}
              height={220}
              url={"https://www.youtube.com/shorts/OZFgzoEDiSg"}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
                facebook: {
                  appId: "12345",
                },
              }}
            />
          </div>
        )}

        {change ? (
          <Skeleton variant="rectangular" width={140} height={220} />
        ) : (
          <div>
            <ReactPlayer
              controls
              width={140}
              height={220}
              url={"https://www.youtube.com/shorts/FK5YdbRqFlw"}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
                facebook: {
                  appId: "12345",
                },
              }}
            />
          </div>
        )}
      </div>
    </Stack>
  );
};

export default HomePage;
