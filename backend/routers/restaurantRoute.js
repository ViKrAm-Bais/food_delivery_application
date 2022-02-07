const router = require('express').Router();
const auth = require('../middleware/auth')

const itemList = require('../models/itemList');

router.post('/additem', auth, async (req, res) => {
    try {
        const {restaurantId, itemName } = req.body

        var items = []

        var existingItem = false
        for (var i=0; i < itemList.length; i++) {
            if (itemList[i].restaurantId === restaurantId && itemList[i].itemName === itemName) {
                // console.log("item already exists")
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

router.post('/getitem', auth, async (req, res) => {
    try {
        // restaurant
        const {restaurantId} = req.body

        var items = []

        for (var i=0; i < itemList.length; i++) {
            if (itemList[i].restaurantId === restaurantId) {
                items.push(itemList[i])
                existingUser = true;
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
        // console.log("restaurant/getitem", restaurantId);

        // console.log("before",  itemList.length)

        for (var i=0; i < itemList.length; i++) {
            if (itemList[i].restaurantId === restaurantId && itemList[i].itemName === itemName) {
                // console.log(req.user, itemList[i].itemName)
                itemList.splice(i, 1)
                break;
            }
        }

        // console.log("after",  itemList.length)

        res.status(200).json("done")
    } catch (error) {
        console.log("err: ", error);
        res.status(500).send();
    }
})


module.exports = router;