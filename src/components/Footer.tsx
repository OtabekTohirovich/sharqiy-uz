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

export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: { xs: "100%", sm: "60%", md: "50%", lg: "37%", xl: "27%" },
        margin: "auto",
        height: "6.7vh",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Asosiy" value="recents" icon={<Home />} />
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
