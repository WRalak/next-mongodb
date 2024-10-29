import mongoose from 'mongoose'


const MONGO_URI=process.env.MONGO_URI;


if(!MONGO_URI){
    throw new Error("Please define MONGO_URI environmental variable inside .env");
}
async function dbConnect() {
    if(mongoose.connection.readyState !==1){
        try{
await mongoose.connect(MONGO_URI);
console.log("db is connected")
        } catch(error){
console.log(error);
throw error
        }
        
    }
    else{
        console.log("db is already connected")
    }
    
}

export default dbConnect;