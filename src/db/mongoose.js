const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://todojs:1040data@cluster0.xlsfe.mongodb.net/taskapp?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
