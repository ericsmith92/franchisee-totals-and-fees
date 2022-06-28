import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import Link from "@mui/material/Link";

interface ButtonAppBarProps {}

const ButtonAppBar: React.FC<ButtonAppBarProps> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NextLink href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              Totals
            </Typography>
          </NextLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
