import mongoose from "mongoose";

const connectingURL = process.env.MONGO_CONNECTION_STRING; //from .env
console.log(connectingURL);

const connection: { isConnected?: number } = {};

async function connectDB() {
  try {
    if (connection.isConnected) {
      return;
    }

    const db = await mongoose.connect(connectingURL!);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
