const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();

const PORT =  process.env.PORT || 5000; 

app.listen(PORT, ()=> console.log(`Server Started in PORT: ${PORT}`))
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));


app.use("/auth", require("./routers/userRoute"));
app.use("/restaurant", require("./routers/restaurantRoute"));
app.use("/order", require("./routers/orderRoute"));

