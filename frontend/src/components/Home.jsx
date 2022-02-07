import { Grid } from "@material-ui/core";
import { useContext } from "react";
import HomeFrame from "./HomeFrame";
import Restaurants from "./Restaurant/Restaurants";


const Home = () => {
    return (
        <>
        <HomeFrame/>
        <Restaurants/>
        </>
    )
}

export default Home;