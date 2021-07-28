const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const bcrypt = require("bcryptjs");

const app = express();
const port = 5000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});

// async function hashFunction() {
//   const password = "peter1234";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("peter1234", hashedPassword);
//   console.log(isMatch);
// }

// hashFunction();
