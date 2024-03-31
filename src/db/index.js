import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


async function connectDb(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Mongodb connected !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection Failed : ", error);
        process.exit();
    }
}

export default connectDb;