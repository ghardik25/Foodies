const {readData, addItem, deleteItem} = require('../database/db')

const getLunch = async (req, res) => {
    try {
        res.send(await readData('lunch'));
    }
    catch(error) {
        console.log(`${error} in getLunch`);
    }
}

const addLunch = async (req, res) => {
    try {
        const check = await addItem(req.body, 'lunch');

        if(check === 1) res.json({entryCheck: 1});
        else {
            res.json({entryCheck: 0});
        }
    }
    catch(error) {
        console.log(`${error} in addLunch()`);
    }
}

const deleteLunch = async (req, res) => {
    try {
        const check = await deleteItem(req.body, 'lunch');

        if(check === 1) res.json({entryCheck: 1});
        else {
            res.json({entryCheck: 0});
        }
    }
    catch(error) {
        console.log(`${error} in deleteLunch()`);
    }
}

module.exports = {getLunch, addLunch, deleteLunch};