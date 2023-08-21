import { Error } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { Carousel } from "antd";

const ProductPage = () => {
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
      <Carousel autoplay>
        <div>
          <img
            width={"100%"}
            src="https://k-ch.na4u.ru/public/products/438416a86dc7017b2dbbda564d2c4e77.png"
            alt="product"
          />
          
        </div>
        <div>
            <img
              width={"100%"}
              src="https://k-ch.na4u.ru/public/products/7a237e2d252c93a3aa25cb22b4c84823.png"
              alt="product"
            />
        </div>
        <div>
            <img
              width={"100%"}
              src="https://k-ch.na4u.ru/public/products/9d022700a33d3f6b36b0048034161f6b.png"
              alt="product"
            />
        </div>
      </Carousel>
      <Typography sx={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px" }}>
        Chuchvara tuggich
      </Typography>

      <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
        Narxi:
      </Typography>
      <Stack direction={"row"} sx={{ alignItems: "center" }}>
        <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
          75,000 so'm
        </Typography>
        <Typography sx={{ fontSize: "12px", paddingLeft: "10px" }}>
          <span style={{ textDecoration: "line-through" }}>136,000 so'm</span>{" "}
          <span style={{ color: "red" }}>-44.85%</span>
        </Typography>
      </Stack>
      <Stack direction={"row"} sx={{ marginBottom: "8px" }}>
        <Error />
        <Typography>Mahsulot tavsifi</Typography>
      </Stack>
      <Typography>🗣 MISHA QOʻL BOLA CHUCHVARA ATMEN</Typography>
      <Typography>
        ☝️🍲🥟 UY BEKALARI AZIZ AYOL QIZLARIMIZ UCHUN JUDAYAM AJOYIB ZAMONAVIY
        CHUCHVARA TUGISH UCHUN MOSLAMA CHEGIRMA NAR...
      </Typography>

      <Button variant="contained" sx={{borderRadius: "25px", background: "#f44336", marginTop: '10px', padding: "10px"}}>
        Sotib olish
      </Button>
    </Stack>
  );
};

export default ProductPage;
