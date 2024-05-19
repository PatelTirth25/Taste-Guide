import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import meal from "./meal.js"
import recipe from './recipe.js'


const app = express()
const port = 8080
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use('/meal',meal);

app.use('/recipe',recipe)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})