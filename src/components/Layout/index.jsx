import React from "react";
import Header from "../Header";
import { Box, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { CodeCase } from "../../pages/CodeCase";

function Layout(props) {
    return (
        <>
            <Header />
            <Box component="main">
                <CodeCase />
            </Box>
        </>

    )
}

export default Layout;