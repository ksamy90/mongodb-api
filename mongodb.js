const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

const connectionURL = "mongourl";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db();

    // db.collection("users").insertOne({
    //   name: "Mike",
    //   age: 31,
    // });

    // db.collection("users").insertOne(
    //   {
    //     name: "Timothy",
    //     age: 39,
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result);
    //   }
    // );

    // db.collection("tasks").insertMany([
    //   {
    //     description: "run marathon",
    //     completed: false,
    //   },
    //   {
    //     description: "design art",
    //     completed: false,
    //   },
    // ]);

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("60f128a778f8bf39e5ecf2cf") },
    //   (err, task) => {
    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((err, tasks) => {
    //     console.log(tasks);
    //   });

    // db.collection("tasks")
    //   .updateOne(
    //     { _id: new ObjectID("60f128a778f8bf39e5ecf2cf") },
    //     {
    //       $set: {
    //         completed: true,
    //         description: "attend formula 1 match",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    db.collection("tasks")
      .deleteOne({
        description: "run marathon",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
