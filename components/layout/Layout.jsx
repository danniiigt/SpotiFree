import { useContext } from "react";
import { LayoutContext } from "../../context/layout";
import Head from "next/head";

import { FooterPlayer, SideBar } from "./";
import { Box } from "@mui/material";

export const Layout = ({
  title = "Spotifree",
  description = "La app para escuchar música gratuita",
  children,
}) => {
  const { drawerWidth, footerPlayerHeight } = useContext(LayoutContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#008fff" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <SideBar />

      <main>
        <Box
          sx={{
            width: `calc(100vw - ${drawerWidth}px)`,
            marginLeft: "auto",
            padding: "20px",
            height: `calc(100vh - ${footerPlayerHeight}px)`,
            background:
              "linear-gradient(220deg, rgba(13,13,13,1) 0%, rgb(0, 10, 18) 40%, rgba(13,13,13,1) 65%, rgba(13,13,13,1) 100%)",
          }}
        >
          {children}
        </Box>
      </main>

      <FooterPlayer />
    </>
  );
};
