import mongoose from "mongoose";

// Cache the connection to reuse in serverless environments
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    try {
        // If already connected, return the existing connection
        if (cached.conn) {
            return cached.conn;
        }

        // If connection is in progress, wait for it
        if (!cached.promise) {
            const opts = {
                bufferCommands: false,
            };

            cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickblog`, opts).then((mongoose) => {
                mongoose.connection.on('connected', () => console.log("Database Connected"));
                return mongoose;
            });
        }

        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        cached.promise = null;
        console.log(error.message);
        throw error;
    }
}

export default connectDB;