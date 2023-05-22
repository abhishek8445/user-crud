import express from "express"
import db_Path from "../mongoDb/db_conn.js"

const route = express.Router()

route.post('/registration', async (req, res) => {
    try {
        //    await db_Path.db(`Students`).collection(`user`).insertMany()
        const data = (await db_Path.db(`Students`).collection(`user`).find().toArray()).map(p => p.age);

        console.log(data, "data ")
        res.json({ status: false, error: err, Message: ' data send Failed *****>' })
    }
    catch (err) {
        res.json({ status: false, error: err, Message: ' data send Failed *****>' })
    }

})


export default route
