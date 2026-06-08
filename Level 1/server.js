import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Advanced Backend')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:3000`)
})