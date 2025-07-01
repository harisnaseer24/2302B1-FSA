import express from 'express'
import dotenv from 'dotenv'
import router from './routes/route.mjs';
import mongoose from 'mongoose';

const app = express()
//body parser
app.use(express.json())
dotenv.config();
const port = process.env.PORT
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
console.log("db connected")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use("/", router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
