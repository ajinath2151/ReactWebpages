import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom:theme.spacing(5),
  },
  media: {
    height: 250,
  },  
}));
// -----------------------------------for adding post-------------------------------------------------
const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg"
          title="my post here..."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My First Post...
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit, in dolores et culpa eius voluptas explicabo
            asperiores? Possimus illum alias aut consectetur enim, quia velit
            saepe aliquid unde veritatis!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
