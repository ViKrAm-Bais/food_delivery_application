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
        fontSize: 12
    },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center'
    },
    detail: {
        fontSize: 10,
        wordBreak: 'break-word',
        textAlign: 'center'
    }
})

function ItemView(props) {

    const item = props.item;

    const classes = useStyles();


    return (
        <Box className={classes.container}>
            <Typography className={classes.text}>{item.id}</Typography>
            <Typography className={classes.text}>{item.itemName}</Typography>
        </Box>
    )
}

export default ItemView
