import express from 'express'
import router from './routes/router.mjs'
import dotenv from 'dotenv'

const app = express()
dotenv.config();
const port = process.env.PORT

//middleware
//body parser
app.use(express.json())

app.use("/",router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
