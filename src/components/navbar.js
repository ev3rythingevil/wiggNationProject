// imports
import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";


function Navbar() {
    return (
    
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr:2 }}
                    />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Navbar
                </Typography>  
                    <Button color="inherit">Test Button</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;