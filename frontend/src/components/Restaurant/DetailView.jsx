import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Typography, makeStyles } from '@material-ui/core'


import { Link, useLocation } from 'react-router-dom';
import ItemView from './ItemsView';



const useStyles = makeStyles({
    text: {
        color: '#878787',
        fontSize: 24
    },
    heading: {
        fontSize: 32,
        fontWeight: 600,
        textAlign: 'center'
    }
})

function DetailView({match}) {
    const classes = useStyles();
    const [itemList, setItemList] = useState([])

    useEffect(()=> {
        const fetchData = async ()=> {

            let data = await axios.post("http://localhost:5000/restaurant/getitem/" + match.params.id, {
                withCredentials: true
            });
            setItemList(data.data)
        }
        fetchData();
        console.log("detail viewww", itemList)
    }, [])

    return (
        itemList.map(ele=>(
            <ItemView item = {ele}/>
        ))
    )
}

export default DetailView