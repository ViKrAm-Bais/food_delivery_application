const router = require('express').Router();
const auth = require('../middleware/auth')

const OrderList = require('../models/orderList');

router.post('/addorder', auth, async (req, res) => {
    try {
        const { customerId, restaurantId, itemName, role } = req.body
        // console.log("order", customerId, restaurantId, itemName, role)
        OrderList.push({ customerId, restaurantId, itemName });

        res.status(200).json(OrderList)
        // console.log(OrderList)
    } catch (error) {
        console.log("err: ", error);
        res.status(500).send();
    }
})


router.post('/getorderlist', auth, async (req, res) => {
    try {
        console.log(req.role, req.user)
        const { customerId, restaurantId } = req.body
        var items = []

        if(req.role === "customer") {
            for (var i=0; i < OrderList.length; i++) {
                if (OrderList[i].customerId === req.user) {
                    items.push(OrderList[i].itemName)
                }
            }
        }

        if(req.role === "restaurant") {
            for (var i=0; i < OrderList.length; i++) {
                if (OrderList[i].restaurantId === req.user) {
                    items.push(OrderList[i].itemName)
                }
            }
        }

        res.status(200).json(items)
        // console.log(items)
    } catch (error) {
        console.log("err: ", error);
        res.status(500).send();
    }
})


module.exports = router;