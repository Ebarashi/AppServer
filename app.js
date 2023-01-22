import express from 'express';
import { router } from "./routers/index.js"

const app = express()
app.use(router)

// app.use(express.json())
// app.use(express.static('routers'))

app.listen(3000,  () => {
    console.log("Listening on port 3000...")
})