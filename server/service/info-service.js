const { db_insertInfo, db_getInfoById } = require("../db_controller/db_info");

const addInfo = async (req, res) => {
  const contactInfo = req.body;
  const id = await db_insertInfo(contactInfo);
  res.status(200).json({ id: id, info: contactInfo });
};

const getInfo = async (req, res) => {
  const id = req.params.id;
  const info = await db_getInfoById(id);
  res.status(200).json({ info: info });
};

module.exports = { addInfo, getInfo };
