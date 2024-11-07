const { readData, connect } = require("../database/db");

const doesExist = async (data) => {
    try {
        const { client, coll } = await connect("feedback");

        const entry = await coll.findOne({dishName: data.dishName, email: data.email});
        await client.close();

        if(entry) {
            return 1;
        }
        else return 0;
    }
    catch (error) {
        console.log(`${error} in doesExist`);
    }
}


const getFeedback = async (req, res) => {
  try {
    res.json(await readData("feedback"));
  } catch (error) {
    console.log(`${error} in getFeedback`);
  }
};

const addFeedback = async (req, res) => {
  try {
    const { client, coll } = await connect("feedback");

    const data = req.body;
    const entryCheck = await doesExist(data);

    if(entryCheck === 0) {
        // New Feedback
        await coll.insertOne(data);
        await client.close();
        res.json({entryCheck: 0});
    }
    else {
        console.log('Feedback Already Exists, Delete that to add')
        res.json({entryCheck: 1});
    }
  } catch (error) {
    console.log(`${error} in addFeedback`);
  }
};

const deleteFeedback = async (req, res) => {
  try {
    const data = req.body;
    const entryCheck = await doesExist(data);
    
    if(entryCheck === 0) {
      // Feedback doesn't exists
      res.json({entryCheck: 0});
    }
    else {
      // Feedback Exists
      const { client, coll } = await connect("feedback");
      await coll.deleteOne({dishName: data.dishName, email: data.email});
      await client.close();
      res.json({entryCheck: 1});
    }
  } catch (error) {
    console.log(`${error} in addFeedback`);
  }
};

module.exports = { getFeedback, addFeedback, deleteFeedback };
