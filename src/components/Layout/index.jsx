import React from "react";
import Header from "../Header";
import { Box, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout(props) {
    return (
        <>
            <Header />
            <Box component="main">
                <Outlet />
            </Box>
        </>

    )
}

export default Layout;