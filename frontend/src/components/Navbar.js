import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import Logout from './auth/Logout';
import { AppBar, Toolbar, Typography, makeStyles, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory, withRouter } from 'react-router-dom';


const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            paddingLeft: 10,
            paddingRight: 10 
        }
    },
    link: {
        textDecoration: 'none', 
        color: 'inherit'
    }
})

function Navbar() {

    const {loggedIn} = useContext(AuthContext);
    const classes = useStyles();
    console.log(loggedIn)

    return (
        <>

            <AppBar position="sticky" className={classes.component}>
                <Toolbar className= {classes.container}>
                <Link to='/' className={classes.link}><Typography>HOME</Typography></Link>

                    {loggedIn === false && (
                        <> 
                            <Link to='/login' className={classes.link}><Typography>LOGIN</Typography></Link>
                            <Link to='/register' className={classes.link}><Typography>REGISTER</Typography></Link>
                        </>
                    )}
                    {
                        loggedIn === true && 
                        <>
                            <Logout/>
                        </>
                    }
                </Toolbar>
            </AppBar>
            
            
        </>
    )
}

export default Navbar
