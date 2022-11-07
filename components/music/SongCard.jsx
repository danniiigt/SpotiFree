import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

export const SongCard = ({ title, author, image }) => {
  const [showPlayButton, setShowPlayButton] = useState(false);

  return (
    <Card
      onMouseEnter={() => setShowPlayButton(true)}
      onMouseLeave={() => setShowPlayButton(false)}
      elevation={2}
      sx={{
        backgroundColor: "black",
        height: 250,
        borderRadius: 1.5,
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          transition: "all 0.3s ease",
          backgroundColor: "primary.main",
          position: "absolute",
          zIndex: 3,
          bottom: 35,
          right: 10,
          opacity: showPlayButton ? 1 : 0,

          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <PlayArrowIcon />
      </IconButton>

      <CardActionArea sx={{ p: 1.75, height: "100%" }}>
        <CardMedia
          component="img"
          image={image}
          alt="song-image"
          sx={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 1,
            height: "80%",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)",
          }}
        />
        <CardContent sx={{ mt: 1, p: 0, height: "20%" }}>
          <Typography variant="body1" color="text.secondary" noWrap>
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            noWrap
            sx={{ mt: -0.3, fontSize: "12px" }}
          >
            <Link href={`/artista/${author}`}>{author}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
