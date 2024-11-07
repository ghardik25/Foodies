const { insert, remove, update, connect } = require("../database/db");
const { encrypt, decrypt } = require("../bcrypt/privacy");
const { generateToken } = require('../token/token')


const check = async (data) => {
  try {
    const { client, coll } = await connect('users');
    // console.log('connected');

    const user = await coll.findOne({ email: data.email });

    if (user) {
      console.log(user.password);
      console.log(data.password);

      // Matching passwords using compare() method of bcryptJS
      // bcrypt.compare(<user_pass>, <encrypted/database_pass>)
      // const match = await bcrypt.compare(data.password, user.password);
      const match = await decrypt(data.password, user.password);
      await client.close();

      // if(user.password === data.password) {
      if (match) {
        return -1;
      }

      // if the password is wrong
      //   signal = 1;
      // return false;
      return 1;
    } else {
      // if user doesn't exist/new user
      //   signal = 0;
      // await client.close();
      // return false;
      return 0;
    }
  } catch (error) {
    console.log(`${error} in check`);
  }
};

const signup = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    // const username = data.email.toLowerCase().split("@")[0];

    // checking user credentials
    const signal = await check(data);
    if (signal === 0) {
      // new user
      await insert(data, 'users');
      const token = await generateToken(data.email);
      res.json({valid: 0, token, role: data.role});

    } else res.json({valid: 5});
  } catch (error) {
    console.log(`${error} in sign-up`);
  }
};

module.exports = { check, signup };