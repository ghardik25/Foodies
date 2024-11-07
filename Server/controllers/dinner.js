const {readData, deleteItem, addItem} = require('../database/db')

const getDinner = async (req, res) => {
    try {
        res.send(await readData('dinner'));
    }
    catch(error) {
        console.log(`${error} in getDinner`);
    }
}

const addDinner = async (req, res) => {
    try {
        const check = await addItem(req.body, 'dinner');

        if(check === 1) res.json({entryCheck: 1});
        else {
            res.json({entryCheck: 0});
        }
    }
    catch(error) {
        console.log(`${error} in addDinner()`);
    }
}

const deleteDinner = async (req, res) => {
    try {
        const check = await deleteItem(req.body, 'dinner');

        if(check === 1) res.json({entryCheck: 1});
        else {
            res.json({entryCheck: 0});
        }
    }
    catch(error) {
        console.log(`${error} in deleteDinner()`);
    }
}

module.exports = {getDinner, addDinner, deleteDinner};