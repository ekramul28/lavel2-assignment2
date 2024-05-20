import app from "./app";
import mongoose from "mongoose";

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

main();
