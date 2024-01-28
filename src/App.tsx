import { useState } from "react";
import { Outlet } from "react-router-dom";
import reactQueryLogo from "./assets/react-query-logo.png";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Image from "mui-image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SpeedDial from "@mui/material/SpeedDial";

import SideNavigation from "./SideNavigation";

import "./App.css";

function App() {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <div dir="rtl">
      <Box
        p={2}
        sx={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          flexGrow: 1,
        }}
      >
        <div style={{ paddingTop: 60 }}>
          <a href="https://tanstack.com/query/latest" target="_blank">
            <img
              src={reactQueryLogo}
              className="logo react"
              alt="React Query logo"
            />
          </a>
        </div>
        <h1>בלוג React Query</h1>
        <h2
          style={{
            marginBottom: "10%",
          }}
        >
          <a href="https://tkdodo.eu/blog/practical-react-query">
            בלוג מקורי מאת TkDodo
          </a>
        </h2>
        <div className="card">
          <Outlet />
        </div>
        <BottomNavigation
          sx={{
            position: "fixed",
            bottom: 0,
          }}
        >
          <Box
            sx={{
              height: 100,
              transform: "translateZ(0px)",
            }}
          >
            <SpeedDial
              ariaLabel="Navigation Speed Dial component"
              className="speed-dial"
              sx={{
                position: "fixed",
                bottom: 66,
                right: 6,
                "& .MuiFab-primary": {
                  backgroundColor: "#ff4154",
                  color: "#ffd94c",
                  "&:hover": { backgroundColor: "#fe6574" },
                },
              }}
              icon={!navIsOpen ? <MenuIcon /> : <MenuBookIcon />}
              onClick={() => setNavIsOpen(!navIsOpen)}
            />
          </Box>
        </BottomNavigation>
        <Drawer
          anchor="right"
          open={navIsOpen}
          onClose={() => setNavIsOpen(false)}
        >
          <SideNavigation />
        </Drawer>
      </Box>
    </div>
  );
}

export default App;
