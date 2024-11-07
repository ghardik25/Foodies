const { remove } = require('../database/db')

const deleteUser = async (req, res) => {
    try {
        const check = await remove(req.body);
        res.json({check});
    }
    catch(error) {
        console.log(`${error} in deleteUser`);
    }
}

module.exports = {deleteUser};