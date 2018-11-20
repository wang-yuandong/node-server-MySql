const fs = require('fs');

const readFile = async function () {
    let data;
    try {
        data = fs.readFileSync('files/备忘.txt').toString();
    } catch (e) {
        fs.appendFile('logs/errorLogs.txt', `${new Date()}--${e.toString()}\r`, (err) => {
            if (err) throw err;
            console.log('See logs in logs/errorLogs.txt');
        });
        data = e;
    }
    return data
};

module.exports = readFile;