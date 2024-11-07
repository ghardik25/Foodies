const { connect } = require('../database/db');
const {check} = require('./signup');
const { generateToken } = require('../token/token')

const checkUserType = async (data) => {
    try {    
        const { client, coll } = await connect('users');
        // console.log('connected');
    
        const user = await coll.findOne({ email: data.email });
        await client.close();

        if(user.role === "admin") return "admin";
        else if(user.role === "canteen") return "canteen";
        else return "user";
    }
    catch(error) {
        console.log(`${error} in checkUserType()`);
    }
} 

const login = async(req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const username = data.email.toLowerCase().split('@')[0];

        // checking user credentials
        const signal = await check(data);
        
        if(signal === -1) {
            // res.status(200).send(`Welcome! ${username}`);
            // console.log(`Welcome ${username}`);
            const token = await generateToken(data.email);
            // res.json({valid: -1, token});

            const role = await checkUserType(data);
            res.json({valid: -1, token, role});
        }
        else if(signal === 0){     // new user
            res.json({valid: 0});
        }
        else res.json({valid: 1});     // wrong password
    }
    catch(error) {
        console.log(`${error} in login`);
    }
}

module.exports = { login };