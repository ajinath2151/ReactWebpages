import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

const useStyles = makeStyles((theme)=>({
  right: {
    [theme.breakpoints.down("sm")]: {
      display:"none",
    },
  },
}))


const App = () => {

  const classes = useStyles();

    return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right} >
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
