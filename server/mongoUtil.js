const { MongoClient } = require("mongodb");

const uri = process.env.URI || "mongodb://127.0.0.1:27017";

let database;

const connectToClient = () => {
  const client = new MongoClient(uri);
  database = client.db("Noticer");
  if (database) {
    console.log("connected");
  }
};

const getDB = () => {
  if (!database) {
    console.log("undefiend");
  }
  return database;
};

exports.connectToClient = connectToClient;
exports.getDB = getDB;
