const mongoUtil = require("../mongoUtil");

const db_insertInfo = async (info) => {
  const database = mongoUtil.getDB();
  try {
    const infoCollection = await database.collection("contacts");
    const result = await infoCollection.insertOne(info);
    return result.insertedId;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { db_insertInfo };
