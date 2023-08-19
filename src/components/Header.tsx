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
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Search, Settings } from "@mui/icons-material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 1 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "6vh",  }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "60%", md: "50%", lg: "40%" },
          marginX: "auto",
          bgcolor: "#fff",
          paddingTop: '2px',
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px"
        }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, bgcolor: "#f44336" }}
            size="small"
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={'row'}
            sx={{border:" 1px solid #f44336", height: "32px", borderRadius: "15px", overflow: 'hidden', width: {xs: "300px", sm: "600px" } }}
          >
            <input
              type="text"
              placeholder="Search..."
              style={{border: "none", background: "#fff", padding: "0 10px", width: "90%"}}
            />
            <IconButton  size="small">
              <Search  sx={{color: "black"}}/>
            </IconButton>
          </Stack>
          <IconButton
            sx={{ bgcolor: "#f44336", marginLeft: '10px', color: "#fff" }}
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
