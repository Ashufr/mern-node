require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
// console.log('env',process.env.DB_PASSWORD)

//db connection
const connectDB = require("./config/connectDB");
connectDB();
//Schema








//bodyParser
app.use(cors());
app.use(express.json());
// server.use(morgan('default'));
app.use(express.static("dist"));
app.use('/products',productRouter.router);
app.use('/users',userRouter.router);
app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'dist/index.html'))
    // res.json({
    //     status:404,
    //     message:"page not found"
    // })
})



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('server started at port ' + port);
});
