const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://todojs:1040jazz@cluster0.xlsfe.mongodb.net/taskapp?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
