import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link, useLocation, withRouter } from 'react-router-dom';
import Restaurant from './Restaurant';

function Restaurants() {

    const [restaurantList, setRestaurantList] = useState([])
    const {search} = useLocation();

    useEffect(()=> {
        const fetchData = async ()=> {
            let data = await axios.post("http://localhost:5000/restaurant/getrestaurants", {
                withCredentials: true
            });
            setRestaurantList(data.data)
        }
        fetchData();
    }, [])

    return (
        restaurantList.map(ele=>(
            <Grid item lg={2} sm={3} xs={6}>
                <Link to={'/details/'+ele.id} style ={{textDecoration: 'none', color: 'inherit'}  } >
                    <Restaurant restaurant = {ele} />
                </Link>
            </Grid>
        ))
    )
}

export default withRouter(Restaurants);