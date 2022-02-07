import { Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    container: {
        height: 200,
        margin: 10,
        borderRadius: 10,
        border: '0px solid  #dddddd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        boxShadow: "2px 2px 8px 2px #999999",
        // width: '20%'
        '&:hover': {
            boxShadow: "2px 2px 8px 6px #999999",
        },
        '&>*': {
            padding: '0 5px 5px 5px'
        }

    },
    image: {
        height: 170,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0px 0px '
    },
    text: {
        color: '#878787',
        fontSize: 24
    },
    heading: {
        fontSize: 32,
        fontWeight: 600,
        textAlign: 'center'
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word',
        textAlign: 'center'
    }
})

function ItemsView(props) {

    const ele = props.item;
    console.log(ele)
    const classes = useStyles();


    return (
        <>
        <h1>Hellooo</h1>
        </>
        // <Box className={classes.container}>
        //     <Typography className={classes.text}>{ele.restaurantId}</Typography>
        //     <Typography className={classes.text}>{ele.itemName}</Typography>
        // </Box>
    )
}

export default ItemsView
