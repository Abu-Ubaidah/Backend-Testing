import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app }  from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    try {
      const PORT = process.env.PORT || 8000;
      app.listen(PORT, () => {
        console.log(`✅ App listening on PORT: ${PORT}`);
      });
    } catch (error) {
      console.error("❌ App startup error:", error);
    }
  })
  .catch((error) => {
    console.error("❌ MONGODB CONNECTION ERROR:", error);
  });
