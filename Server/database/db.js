const { encrypt, decrypt } = require("../bcrypt/privacy");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

// Connection to MongoDB
const connect = async (collection) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const coll = client.db("foodies").collection(collection);

    return { client, coll };
  } catch (error) {
    console.log(error);
  }
};

const readData = async (collection) => {
  try {
    const { client, coll } = await connect(collection);

    const data = await coll.find({}).toArray();
    await client.close();

    return data;
  } catch (error) {
    console.log(`${error} in readData()`);
  }
};

// For inserting user/data
const insert = async (userData, collection) => {
  const { client, coll } = await connect(collection);

  // Password Encryption
  userData.password = await encrypt(userData.password);

  // Secret Answer encryption for forgot password
  userData.answer = await encrypt(userData.answer);

  // New user entry
  await coll.insertOne(userData);
  await client.close();
};

// For deleting user/data  (For Admin only)
const remove = async (userinfo) => {
  try {
    const { client, coll } = await connect('users');

  const data = coll.findOne({email: userinfo.email});

  if(data) {
      if(data.role === 'admin') {
        return -1;          // can't delete admin
      }
      else {
        // Deleting user
        await coll.deleteOne({ email: userinfo.email });
        await client.close();
        return 1;          // Successfully deleted user
      }
  }
  else {
    return 0;        // Entry/user Doesn't exist
  }
  }
  catch(error) {
    console.log(`${error} in remove()`);
  }
};

// For Updating details
const update = async (data, collection) => {
  const { client, coll } = await connect(collection);

  // Updating user
  await coll.updateOne(
    { email: data.email },
    {
      $set: {
        name: data.name,
        branch: data.branch,
        question: data.question,
        answer: data.answer,
        registeredAs: data.registeredAs,
      },
    }
  );
  await client.close();
};


const itemCheck = async (data, collection) => {
    try {
      const { client, coll } = await connect(collection);
      const check = await coll.findOne({dishName: data.dishName});
      
      if(check) {
        return 1;       // Item already Exists
      }
      else {
        return 0;       // Doesn't exists
      }
    }
    catch(error) {
      console.log(`${error} in itemCheck()`);
    }
}


// For adding items
const addItem = async (userData, collection) => {
  try {
    const check = await itemCheck(userData, collection);

    if(check === 1) {
      return 1;
    }
    else {
      // New item entry
      const { client, coll } = await connect(collection);
      await coll.insertOne(userData);
      await client.close();
      return 0;
    }
  }
  catch(error) {
    console.log(`${error} in addItem()`);
  }
};


// For deleting items
const deleteItem = async (userData, collection) => {
  try {
    const check = await itemCheck(userData, collection);

    if(check === 1) {
      // Deleting entry
      const { client, coll } = await connect(collection);
      await coll.deleteOne({dishName: userData.dishName});
      await client.close();
      return 1;
    }
    else {
      return 0;
    }
  }
  catch(error) {
    console.log(`${error} in deleteItem()`);
  }
};


module.exports = { insert, remove, update, connect, readData, addItem, itemCheck, deleteItem };