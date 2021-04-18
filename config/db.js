const mongoose = require("mongoose");

var dbConnect =
  "mongodb+srv://" +
  process.env.DB_USER_PASS +
  "@clusterdemonode.0hndi.mongodb.net/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";

mongoose
  .connect(dbConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
