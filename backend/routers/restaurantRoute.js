const router = require('express').Router();
const auth = require('../middleware/auth')

const itemList = require('../models/itemList');
const userList = require('../models/userList');

router.post("/getrestaurants", async (req, res) => { 
    
    try {
        var items = []
        for (var i=0; i < userList.length; i++) {
            if (userList[i].role === "restaurant" ) {
                items.push(userList[i]);
            }
        }
        res.status(200).json(items)
    } catch (error) {
        console.log("err: ", error);
        res.status(500).send();
    }
})

router.post('/additem', auth, async (req, res) => {
    try {
        const {restaurantId, itemName } = req.body

        var items = []

        var existingItem = false
        for (var i=0; i < itemList.length; i++) {
            if (itemList[i].restaurantId === restaurantId && itemList[i].itemName === itemName) {
                existingItem = true;
                break;
            }
        }
        if(!existingItem) itemList.push({ restaurantId, itemName });
        for (var i=0; i < itemList.length; i++) {
            if (itemList[i].restaurantId === restaurantId) {
                items.push(itemList[i].itemName)
            }
        }
        res.status(200).json(items)
    } catch (error) {
        console.log("err: ", error);
        res.status(500).send();
    }
})

router.post('/getitem/:id', async (req, res) => {
    try {
        // restaurant
        const restaurantId = req.params.id;

        var items = []

        for (var i=0; i < itemList.length; i++) {

            if (itemList[i].restaurantId.toString() === req.params.id.toString()) {
                items.push(itemList[i])
            }
        }
        res.status(200).json(items)
    } catch (error) {
        console.log("err: ", error);
        res.status(500).send();
    }
})

router.post('/deleteitem', auth, async (req, res) => {
    try {
        // restaurant
        const {restaurantId, itemName} = req.body
        for (var i=0; i < itemList.length; i++) {
            if (itemList[i].restaurantId === restaurantId && itemList[i].itemName === itemName) {
                itemList.splice(i, 1)
                break;
            }
        }

        res.status(200).json("done")
    } catch (error) {
        console.log("err: ", error);
        res.status(500).send();
    }
})


module.exports = router;