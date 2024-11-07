const bcrypt = require('bcrypt');

const encrypt = async(data) => {
    console.log(data);
    const newPass = await bcrypt.hash(data, 4);
    console.log(newPass);

    return newPass;
}

const decrypt = async(inputPass, storedPass) => {
    return await bcrypt.compare(inputPass, storedPass);
}

module.exports = {encrypt, decrypt};