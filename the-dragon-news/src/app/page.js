import LatesNews from "@/components/Ui/LatesNews/LatesNews";
import Sidebear from "@/components/Ui/LatesNews/Sidebear/sidebear";
import { Grid } from "@mui/material";


const Homepage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatesNews></LatesNews>
        </Grid>
        <Grid item xs={4}>
          <Sidebear></Sidebear>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;