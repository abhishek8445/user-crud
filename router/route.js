import express from "express"
import PostMethod from "../controller/methodController.js"

import db_Path from "../mongoDb/db_conn.js"

const route = express.Router()

route.post('/registration', async (req, res) => {

    
  
    try {
        const getData = req.body
        await db_Path.db(`students`).collection(`users`).insertOne(getData)

        res.json({ status: true, Message: ' data send successfully>' })
    }
    catch (err) {
        res.json({ status: false, error: err, Message: ' data send Failed *****>' })
    }

})

route.get('/get', async (req, res) => {
    const data = await db_Path.db(`students`).collection(`users`).find().toArray()

    const getage = data.map((v) => {
        return v.age
    })

    //  console.log(getage);

    const addAllUserAge = getage.reduce((v, i) => {
        return v + i / 2
        // console.log( i);
    })

    res.send(`The Average of all user age is ${addAllUserAge}`)
})

//  Get particular data by given the name ,age etc
route.get('/find', async (req, res) => {
    const data = await db_Path.db(`students`).collection(`users`).find({ "age": 20 }).toArray()

    console.log(data, "data find");
})


// Update a documents 

route.patch('/update' , async(req ,res)=>{
try{
    await  db_Path.db(`students`).collection(`users`).updateOne({age:20 } , {$set: {"carreer":"growth"} } )
    res.json({ status:true , message:"update data Successfully"} )
}
catch(err){
     res.json({staus:false , message:"update Data failed"})
}
})


route.delete('/del', async (req, res) => {

    try{
        await db_Path.db(`students`).collection(`users`).deleteMany({name: "anup kumar" })
        res.json({status:true , message:"Data deleted Successfuly"})
    }
   catch(err){
   res.json({ status:false ,  message:"data Deleted  failed =====>"})
    }
})

route.delete('/find' , async (req ,res)=>{
   try{

    // const data =  await db_Path.db('students').collection('users').find({age : {$gt : 25}}).toArray();
    
    const deletedata =  await db_Path.db('students').collection('users').deleteMany({age : {$gt : 25}})
    const data =  await db_Path.db('students').collection('users').find().toArray();
    const filterAge =  data.filter((v)=>{
            return v.age>25
     })
    filterAge.map(i=>{
         db_Path.db('students').collection('users').deleteOne(i)
    })
res.send('data deleted')
    }

   catch(err){
    res.json({ status:false ,  message:"data get  failed =====>"})
   }
})




route.post('/schema' , PostMethod)


export default route
