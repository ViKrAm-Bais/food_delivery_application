import React, { useContext, useState } from 'react';
import { Box, Button, createTheme, FormControl, FormGroup, InputBase, makeStyles, Typography } from '@material-ui/core'
import axios from "axios";
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const theme = createTheme();

const useStyle = makeStyles(()=>({
    container: {
        background: '#dddddd',
        margin: '30vh 35vw 30vh 35vw',
        width: '30vw',
        height: '30vh',
        borderRadius: 5,
        [theme.breakpoints.down('md')]: {
            margin: '30vh 30vw 0 30vw',
            width: '40vw',
            height: '30vh',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '30vh 10vw 30vh 10vw',
            width: '80vw',
            height: '30vh',
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    login: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 600,
        padding: 10
    },
    textFeild: {
        background: '#444444',
        width: '80%',
        margin: '5px',
        padding: '10px',
        borderRadius: 5,
        color: '#ffffff',
    },
    btn: {
        width: '40%',
        margin: '5px',
        padding: '5px 10px 5px 10px',
    },
    newUser: {
        marginTop: 10
    }

}))



function Login() {
    const classes = useStyle();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();


    async function login(e) {
        e.preventDefault();
        

        try {
            const loginData = {
                email,
                password
            }
            await axios.post("http://localhost:5000/auth/login", loginData, {
                withCredentials: true
            });
            console.log("loggedin")
            await getLoggedIn();
            history.push("/");        
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>

            <Box className={classes.container}>
            <Typography className={classes.login}>LOGIN</Typography>

            <form action="" onSubmit={login} className={classes.form}>
                <input placeholder="Email" type="email" className={classes.textFeild}
                    onChange = {(e) => {setEmail(e.target.value)}}
                    value = {email}
                />
                <input  placeholder="Password" type="password" className={classes.textFeild}
                    onChange = {(e) => {setPassword(e.target.value)}}
                    value = {password}
                />
                <button className={classes.btn} type="submit">Login</button>

                <Typography className={classes.newUser}>New User? <Link to='/register'> <span>Create Account</span>  </Link>
                    
                </Typography>
            </form>

        </Box>
        </>
    )
}

export default Login
