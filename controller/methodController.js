import express from 'express'
import db_Path from '../mongoDb/db_conn.js'
 import empModel from '../modal/emp.js'


const PostMethod = async (req ,res )=>{
    // console.log(req.body);
    const user =  await empModel(req.body)
    user.save()
    

 
    res.json({status:true , message:"data send successfully"})
}

export default PostMethod