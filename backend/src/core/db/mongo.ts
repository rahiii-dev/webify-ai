import mongoose from "mongoose";

export class MongoDb {
  private static instance: MongoDb;
  private isConnected: boolean = false;

  private constructor() {}

  public static getInstance(): MongoDb {
    if (!MongoDb.instance) {
      MongoDb.instance = new MongoDb();
    }
    return MongoDb.instance;
  }

  public async connect(uri: string, options?: mongoose.ConnectOptions): Promise<void> {
    if (this.isConnected) return;
    try {
      await mongoose.connect(uri, options);
      this.isConnected = true;
      console.log("✅ MongoDB connected successfully");
    } catch (error) {
      console.error("❌ MongoDB connection error",);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    if(!this.isConnected) return;
    try {
      await mongoose.disconnect();
      this.isConnected = false;
      console.log("✅ MongoDB disconnected successfully");
    } catch (error) {
      console.error("❌ MongoDB disconnection error");
      throw error;
    }
  }
}
