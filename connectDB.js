const mongoose = require ('mongoose');
DB_URI = "mongodb://localhost:27017/userApp";

const connectDB = async() => {
 try {
     let result = await mongoose.connect (DB_URI)
     console.log('database is connected')
 } catch (err) {
     console.log(`can not connect to data base ${err}`)   
 }
}

module.exports=connectDB