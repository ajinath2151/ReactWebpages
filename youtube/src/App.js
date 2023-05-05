import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";



const App = () => {

    return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <LeftBar />
        </Grid>
        <Grid item xs={7}>
          <Feed />
        </Grid>
        <Grid item xs={3}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
