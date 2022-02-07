
import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";

// https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg
// https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg
const useStyles = makeStyles({
    image: {
        background: 'url("https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg") center',
        width: '100%',
        height: '40vh',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 60,
            color: '#FFFFFF',
            lineHeight: 1.5,
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
            padding: 2,
        }
        
    }
})


const HomeFrame = () => {
    const classes = useStyles();
    // console.log(typeof makeStyles);
    return (
        <Box className={classes.image}>
            <Typography>Food delivery application</Typography>
            <Typography>{'  The trendy food delivery partner  '}</Typography>
        </Box>
    )
}


export default HomeFrame;