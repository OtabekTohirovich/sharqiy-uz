import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Stack, Typography } from "@mui/material";
import {
  MonitorHeart,
  Search,
  Settings,
  Watch,
  Air,
  Countertops,
  Bolt,
  VolunteerActivism,
} from "@mui/icons-material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 260;
const navItems = [
  { icon: <MonitorHeart sx={{color: "#ffda00"}}/>, name: "Salomatlik" },
  { icon: <Watch sx={{color: "#6ae46a"}}/>, name: "Soatlar" },
  { icon: <Air sx={{color: "#2d5691"}} />, name: "Atirlar" },
  { icon: <Countertops sx={{color: "#dd7673"}}/>, name: "Oshxona buyumlari" },
  { icon: <Bolt sx={{color: "#ffda00"}} />, name: "Eliktronika" },
  { icon: <VolunteerActivism sx={{color: "#ff0e0d"}} />, name: "Zargarlik buyumlari" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Stack onClick={handleDrawerToggle} sx={{ textAlign: "center", height: "100vh", position: 'relative' }}>
      <img
        src="https://sharqiy.uz/assets/logo.869dfcda.png"
        alt="Logo"
        width={"120px"}
        height={"50px"}
        style={{ objectFit: "cover", margin: " 6px 20px" }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              {item.icon}
              <ListItemText style={{paddingLeft: "10px"}} primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
      <Typography sx={{position: 'absolute', bottom: 0, left: "15px", fontSize: '12px', fontWeight: "bold"}}>
      <span style={{color:"#ff0e0d"}}>SHARQIY</span>.<span style={{color: "#6ae46a"}}>UZ</span> huquqlar himoyalangan
      </Typography>
    </Stack>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "7.5vh", alignItems: "center"  }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "60%", md: "50%", lg: "37%", xl: "27%" },
          marginX: "auto",
          bgcolor: "#fff",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 1,
              bgcolor: "#f44336",
              "&:hover": { bgcolor: "#f44336" },
            }}
            size="small"
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={"row"}
            sx={{
              border: " 1px solid #f44336",
              height: "32px",
              borderRadius: "15px",
              overflow: "hidden",
              width: { xs: "300px", sm: "600px" },
              margin: " 0 13px",
            }}
          >
            <input
              type="text"
              placeholder="Qidiruv..."
              style={{
                border: "none",
                background: "#fff",
                padding: " 0 10px",
                width: "90%",
              }}
            />
            <IconButton size="small">
              <Search sx={{ color: "black" }} />
            </IconButton>
          </Stack>
          <IconButton
            sx={{
              bgcolor: "#f44336",
              marginLeft: "10px",
              color: "#fff",
              "&:hover": { bgcolor: "#f44336" },
            }}
            size="small"
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
