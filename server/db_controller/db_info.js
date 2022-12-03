const mongoUtil = require("../mongoUtil");
const { ObjectId } = require("mongodb");

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

const db_getInfoById = async (id) => {
  const database = mongoUtil.getDB();
  const query = { _id: ObjectId(id) };
  let foundInfo;
  try {
    foundInfo = await database.collection("contacts").findOne(query);
  } catch (err) {
    res.status(500).send({ msg: err });
  }

  return foundInfo;
};

module.exports = { db_insertInfo, db_getInfoById };
