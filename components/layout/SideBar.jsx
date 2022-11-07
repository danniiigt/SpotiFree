import { useContext } from "react";
import { LayoutContext } from "../../context/layout";

import { Divider, Drawer, IconButton, Stack, Tooltip } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

export const SideBar = () => {
  const { drawerWidth, footerPlayerHeight } = useContext(LayoutContext);

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        ".MuiPaper-root": {
          width: drawerWidth,
          height: `calc(100vh - ${footerPlayerHeight}px)`,
          backgroundColor: "#0a0a0a",
          // backgroundColor: "#0d0d0d",
        },
      }}
    >
      <Stack alignItems="center" mt={2} mb={2}>
        <IconButton>
          <img
            src="https://1.bp.blogspot.com/-RgJWXm0t7q0/XIWTSUvY40I/AAAAAAAAIj0/YMDr1bdHzBsryvSU8CEGeSGNlqPh3axlQCK4BGAYYCw/s1600/music%2Bicons.png"
            width="28px"
            height="28px"
            alt="logo"
          />
        </IconButton>
      </Stack>

      <Divider />

      <Stack alignItems="center" spacing={6} mt={3} mb={4}>
        <Tooltip title="Inicio">
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Buscar">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Explorar">
          <IconButton>
            <ExploreOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Guardados">
          <IconButton>
            <BookmarksOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      <Divider />

      <Stack alignItems="center" spacing={6} mt={4} mb={4}>
        <Tooltip title="Nueva lista">
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Canciones con Me Gusta">
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      <Divider />

      <Stack
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
        spacing={6}
        mb={2}
      >
        <Tooltip title="Perfil">
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Drawer>
  );
};
