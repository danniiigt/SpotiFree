import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Layout } from "../components/layout";
import { SongCard } from "../components/music";

const Home = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1.5}>
          <SongCard
            title="Callaita"
            author="Bad Bunny"
            image={
              "https://i.ytimg.com/vi/acEOASYioGY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAq1GxPgnaweT58PPH41jSWPTI0hw"
            }
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1.5}>
          <SongCard
            title="Sigue Bailandome"
            author="YannC, Myke Towers, Eladio Carrion, Lenny Tavarez"
            image={
              "https://i.ytimg.com/vi/ZGy7AK0RnbI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6-CHIIaQpvfGaSEh8faxKy4o2ew"
            }
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1.5}>
          <SongCard
            title="Enséñame a Bailar"
            author="Bad Bunny"
            image={
              "https://i.ytimg.com/vi/eopPKANmKyg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyTlwa8IHIGu9ZlA_LwD02IMISNA"
            }
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1.5}>
          <SongCard
            title="Callaita"
            author="Bad Bunny"
            image={
              "https://i.ytimg.com/vi/acEOASYioGY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAq1GxPgnaweT58PPH41jSWPTI0hw"
            }
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
