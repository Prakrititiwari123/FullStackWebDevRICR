import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); //connecting mondodb database
    console.log(
    //   "MongoDB Connected at : ",
    //   conn.connection.host,
    //   ":",
    //   conn.connection.port 
    `MongoDb connected at : ${conn.connection.host}:${conn.connection.port}`
    );
    console.log("Database name :",conn.connection.name);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
