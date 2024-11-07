const { readData, addItem, deleteItem } = require("../database/db");

const getBreakfast = async (req, res) => {
  try {
    res.json(await readData("breakfast"));
  } catch (error) {
    console.log(`${error} in getBreakfast`);
  }
};

const addBreakfast = async (req, res) => {
  try {
    const check = await addItem(req.body, "breakfast");

    if (check === 1) res.json({ entryCheck: 1 });
    else {
      res.json({ entryCheck: 0 });
    }
  } catch (error) {
    console.log(`${error} in addBreakfast()`);
  }
};

const deleteBreakfast = async (req, res) => {
  try {
    const check = await deleteItem(req.body, "breakfast");

    if (check === 1) res.json({ entryCheck: 1 });
    else {
      res.json({ entryCheck: 0 });
    }
  } catch (error) {
    console.log(`${error} in deleteBreakfast()`);
  }
};

module.exports = { getBreakfast, addBreakfast, deleteBreakfast };
