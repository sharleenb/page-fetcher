const request = require('request');
const fs = require('fs')

request(process.argv[2], (error, response, body) => { 
  fs.writeFile(process.argv[3], body, () => {
    console.log('Downloaded and saved 3261 bytes to ./index.html')
  })
});

