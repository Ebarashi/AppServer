import express from 'express';
import * as func from "../models/func.js"

const router = express.Router()

router.post('/SubmitRecipeToUser2', async (req, res) => {
  const userList = await func.addRecipe(req.query.uid, req.query.recipeTitle)
  // if (userList.length === 0 ) {
  //   return res.status(404).send()
  // }
  return res.status(200).send("done")
  
})

router.post('/SubmitRecipeToUser', async (req, res) => {
  const userList = await func.addRecipe(req.query.uid, req.query.title)
  // if (userList.length === 0 ) {
  //   return res.status(404).send()
  // }
  return res.status(200).send("done")
  
})

export { router }