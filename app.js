const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const pgRoutes = require('./routes/PgRoute')
const roomRoutes = require('./routes/roomRoute')
const tenentRoutes = require('./routes/tenantRoute')

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 3001;
const mongo_URI = process.env.MONGO_URI;

mongoose.connect(mongo_URI).then(() => {
    console.log("Database connected successfully")
    app.listen(PORT, () => {
        console.log(`server is running at ${PORT}`)
    })
})
.catch((error) => console.log(error))


app.use('/pgServer',pgRoutes)
app.use('/roomServer',roomRoutes)
app.use('/tenantServer',tenentRoutes)