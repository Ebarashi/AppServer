import express from 'express';
import * as Login_func from "../models/func.js"

const router = express.Router()

router.post('/SubmitRecipeToUser2', async (req, res) => {
  const userList = await Login_func.addRecipe(req.query.uid, req.query.recipeTitle)
  // if (userList.length === 0 ) {
  //   return res.status(404).send()
  // }
  return res.status(200).send("done")
  
})

export { router }