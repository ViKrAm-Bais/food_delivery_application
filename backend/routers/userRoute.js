const router = require('express').Router();
const User = require('../models/userList');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserList = require('../models/userList');

router.post("/", async (req, res) => {
    try {
        const {name, role, email, password, passwordVerify} = req.body;

        // validation 
        if(!email || !name || !role || !password || !passwordVerify) {
            return res.status(400).json({
                errorMessage: "Please enter required fields"
            });
        }

        if(password.length <6 ) {
            return res.status(400).json({
                errorMessage: "Please enter password of at least 6 characters",
            });
        }

        if(password != passwordVerify) {
            return res.status(400).json({
                errorMessage: "Password not matching",
            });
        }

        // checking user
        var existingUser = false;

        for (var i=0; i < UserList.length; i++) {
            if (UserList[i].email === email) {
                existingUser = true;
                break;
            }
        }

        if(existingUser) {
            return res.status(400).json({
                errorMessage: "Already have an account",
            });
        }

        // hash password 

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // save a new user account

        const newUser = {
            id: Math.floor(Math.random() * Date.now()),
            email: email,
            name: name,
            role: role,
            passwordHash: passwordHash
        };

        UserList.push(newUser)

        let _id = Math.floor(Math.random() * Date.now())

        // log the user in
        const token = jwt.sign({ 
            user: newUser.id,
            role: newUser.role
        }, process.env.JWT_SECRET || "SECRET_KEY");

        // send the token in HTTP-only cookie

        res.cookie("token", token, {
            httpOnly: true,
        }).send("done")



    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send();
    }
})




router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                errorMessage: "Please enter required fields"
            });
        }

        var existingUser = null;

        for (var i=0; i < UserList.length; i++) {
            if (UserList[i].email === email) {
                existingUser = UserList[i];
                break;
            }
        }

        if(!existingUser) return res.status(400).json({
            errorMessage: "Wrong email or password"
        });

        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        
        if(!passwordCorrect) 
        return res.status(400).json({
            errorMessage: "Wrong email or password"
        })

        const token = jwt.sign({ 
            user: existingUser.id
        }, process.env.JWT_SECRET || "SECRET_KEY");

        res.cookie("token", token, {
            httpOnly: true,
        }).send("done")

    } catch (error) {
        console.log("error: ", error)
        res.status(500).send()
    }
})

router.get('/loggedIn', (req, res) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET || "SECRET_KEY");
        res.send(true);
    } catch (error) {
        console.log("err: ", error);
        res.json(false);
    }
})

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send("done");
})

module.exports = router;