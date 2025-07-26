import app from "./app";
import { MongoDb } from "./core/db/mongo";

const PORT = process.env.PORT || 5000;
const db = MongoDb.getInstance();

async function bootStrap() {
  try {
    await db.connect(process.env.MONGO_URI || "", {
      dbName: process.env.MONGO_DB_NAME || "webify-ai",
    });
    app.listen(PORT, () => {
      console.log(`✅ Server running on PORT:${PORT}`);
    });
  } catch (error) {
    db.disconnect();
    console.error("❌ Error starting the server:", error);
  }
}

bootStrap();
