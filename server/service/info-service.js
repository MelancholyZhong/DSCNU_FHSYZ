const { db_insertInfo } = require("../db_controller/db_info");

const addInfo = async (req, res) => {
  const contactInfo = req.body;
  const id = await db_insertInfo(contactInfo);
  res.status(200).json({ id: id, info: contactInfo });
};

module.exports = { addInfo };
