import e from "express";
import router from './src/router/index.js'
import c from 'config'
import mongoose from "mongoose";

const app = e()
const port = c.get("port") || 3000

app.use(e.json())

app.use('/api', router)

const mongoServer = c.get("server");

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("could not connect to mongodb servers", error);
  });
