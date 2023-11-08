import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is running well ! ");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://test:promptituser@cluster0.7ne60or.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = true;

    console.log("MongoDB connected.");
  } catch (error) {
    console.log(error);
  }
};
