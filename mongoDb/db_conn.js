import {MongoClient} from 'mongodb' 

const db_Path = new MongoClient('mongodb://localhost:27017/college')

db_Path.connect()
.then(()=> console.log(`connection succesfully`))
.catch(()=> console.log(` connection failed`))


export default db_Path

