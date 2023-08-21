import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  AutoAwesomeMosaic,
  Home,
  Person,
  PhoneForwarded,
  ShopTwo,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(event);
    
  };
  const navigate =useNavigate()

  return (
    <BottomNavigation
      sx={{
        width: { xs: "100%", sm: "60%", md: "50%", lg: "37%", xl: "27%" },
        margin: "auto",
        height: "7.5vh",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        position: "absolute",
        bottom: 0,
        left: {sm: "20%", md: "25%", lg: "31.5%", xl: "36.5%"},
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction onClick={()=> navigate("/")} label="Asosiy" value="recents" icon={<Home />} />
      <BottomNavigationAction
        label="Vedio"
        value="recentss"
        icon={<ShopTwo />}
      />
      <BottomNavigationAction
        label="Katalog"
        value="favorites"
        icon={<AutoAwesomeMosaic />}
      />
      <BottomNavigationAction
        label="Aloqa"
        value="nearby"
        icon={<PhoneForwarded />}
      />
      <BottomNavigationAction label="Profil" value="folder" icon={<Person />} />
    </BottomNavigation>
  );
}
