const fs = require('fs');
console.log('Salut');

function logTime() {
    let timestamp = new Date().getTime().toString();
    console.log('Saved : ', timestamp);

    fs.appendFile('timelog.txt',  + timestamp +  '\n', (e) => {
        if (e) throw e;
    });
}
setInterval(logTime,1000);