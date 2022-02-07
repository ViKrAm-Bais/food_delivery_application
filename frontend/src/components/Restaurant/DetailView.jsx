import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Typography, makeStyles } from '@material-ui/core'

import { Link, useLocation , withRouter} from 'react-router-dom';
import ItemsView from './ItemsView';



function DetailView({match}) {
    const [itemList, setItemList] = useState([])

    useEffect(()=> {
        const fetchData = async ()=> {
            let data = await axios.post("http://localhost:5000/restaurant/getitem/" + match.params.id, {
                withCredentials: true
            });
            setItemList(data.data)

        }
        fetchData();
    }, [])

    return (
        itemList.map(ele=>(
            <Grid item lg={2} sm={3} xs={6}>
                <ItemsView item = {ele}/>
            </Grid>
        ))
    )
}

export default withRouter(DetailView)