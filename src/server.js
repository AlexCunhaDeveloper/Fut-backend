const express = require('express')
const cors = require('cors')
require('dotenv').config()
const route = require('./routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(route)
app.listen(process.env.PORT || 3000)