import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
  makeStyles,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: 10,
    bottom: 20,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      right: 15,
      top: "60%",
    },
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  title: {
    width: "100%",
  },
  multiText: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
 
  const Add = () => {
      const [open, setOpen] = useState(false);
      const [openAlert, setOpenAlert] = useState(false);


      const handleClose = (event, reason) => {
          if (reason === "clickaway") {
              return;
            }
            setOpenAlert(false);
        };

  const classes = useStyles();

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                className={classes.title}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="Tell your story.."
                multiline
                rows={4}
                variant="outlined"
                className={classes.multiText}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="public">
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend"> who can comment ? </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom(Premium)"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom(Premium)"
                />
              </RadioGroup>
              {/* </FormLabel> */}
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "20px" }}
                onClick={()=>setOpenAlert(true)}
              >
                Create 
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
