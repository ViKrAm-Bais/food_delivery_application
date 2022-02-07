import React, { useContext, useState } from 'react'
import axios from "axios";
import { Box, Button, createTheme, FormControl, FormGroup, InputBase, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router';

const theme = createTheme();

const useStyle = makeStyles(()=>({
    container: {
        background: '#dddddd',
        margin: '20vh 35vw 20vh 35vw',
        width: '30vw',
        height: '40vh',
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



function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordverify] = useState("");
    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    const classes = useStyle();


    async function register(e) {
        e.preventDefault();

        try {
            const registerData = {
                name,
                role,
                email,
                password,
                passwordVerify
            }
            await axios.post("http://localhost:5000/auth", registerData, {
                withCredentials: true
            });
            await getLoggedIn();
            history.push("/");   
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {/* <h1>Register</h1>
            <form action="" onSubmit={register}>
                <input placeholder="Name" type="string" 
                    onChange = {(e) => {setName(e.target.value)}}
                    value = {name}
                />
                <input placeholder="Role" type="string" 
                    onChange = {(e) => {setRole(e.target.value)}}
                    value = {role}
                />
                <input placeholder="Email" type="email" 
                    onChange = {(e) => {setEmail(e.target.value)}}
                    value = {email}
                />
                <input  placeholder="Password" type="password" 
                    onChange = {(e) => {setPassword(e.target.value)}}
                    value = {password}
                />
                <input  placeholder="Re-enter Password" type="password" 
                    onChange = {(e) => {setPasswordverify(e.target.value)}}
                    value = {passwordVerify}
                />
                <button type="submit">Register</button>
            </form> */}

            <Box className={classes.container}>
            <Typography className={classes.login}>REGISTER</Typography>

            <form action="" onSubmit={register} className={classes.form}>

                <input placeholder="Name" type="string" className={classes.textFeild}
                    onChange = {(e) => {setName(e.target.value)}}
                    value = {name}
                />

                <input placeholder="Role" type="string" className={classes.textFeild}
                    onChange = {(e) => {setRole(e.target.value)}}
                    value = {role}
                />

                <input placeholder="Email" type="email" className={classes.textFeild}
                    onChange = {(e) => {setEmail(e.target.value)}}
                    value = {email}
                />

                <input  placeholder="Password" type="password" className={classes.textFeild}
                    onChange = {(e) => {setPassword(e.target.value)}}
                    value = {password}
                />
                <input  placeholder="Re-enter Password" type="password" className={classes.textFeild}
                    onChange = {(e) => {setPasswordverify(e.target.value)}}
                    value = {passwordVerify}
                />

                <button type="submit" className={classes.btn}>Register</button>

            </form>

            
        </Box>
        </>
    )
}

export default Register
