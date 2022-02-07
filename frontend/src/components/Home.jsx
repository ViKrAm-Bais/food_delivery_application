import { Grid } from "@material-ui/core";
import { useContext } from "react";
import HomeFrame from "./HomeFrame";
import Restaurants from "./Restaurant/Restaurants";


const Home = () => {
    return (
        <>
        <HomeFrame/>
        <Restaurants/>
        {/* <Grid container>
            <Grid item lg={2} xs={12} sm={2}>
                
            </Grid>
            <Grid container item lg={10} xs={12} sm={10}>
            </Grid>
        </Grid> */}
        </>
    )
}

export default Home;