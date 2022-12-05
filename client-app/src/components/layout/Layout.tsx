import { Box, Paper } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarSimple } from "../navbar/Navbar.component";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavbarSimple />
      <Paper component='main' sx={{ padding: "60px 40px" }}>
        <Outlet />
      </Paper>
    </Box>
  );
};

export default Layout;
