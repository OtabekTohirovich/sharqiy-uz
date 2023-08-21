import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const CardComponent = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Link to={`/product/${20}`}>
      <Card>
        <CardMedia
          sx={{
            height: { xs: "180px", sm: "205px", md: "220px" },
            objectFit: "fill",
          }}
          image="https://k-ch.na4u.ru/public/products/438416a86dc7017b2dbbda564d2c4e77.png"
          title="green iguana"
          className="imagecard"
        />
        <CardContent sx={{ position: "relative" }}>
          <Typography gutterBottom component="div">
            Chuchvara tuggi..
          </Typography>
          <Typography sx={{ fontSize: "12px" }} color="text.secondary">
            <span style={{ textDecoration: "line-through" }}>136,000 so'm</span>{" "}
            <span style={{ color: "red" }}>-44.85%</span>
          </Typography>
          <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
            75,000 so'm
          </Typography>
          <Checkbox
            className="likes"
            sx={{
              position: "absolute",
              top: { xs: "-183px", sm: "-210px", md: "-222px" },
              right: 0,
            }}
            color="warning"
            size="small"
            {...label}
            icon={<FavoriteBorder sx={{ color: "red" }} />}
            checkedIcon={<Favorite />}
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardComponent;
