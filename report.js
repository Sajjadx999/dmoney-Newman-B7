const newman = require('newman'); 
newman.run({ 
 collection: require("./Collection/dmoneyapi.json"), 
 //collection: 'https://api.postman.com/collections/18755112-d5baae90-3913-4b52-a88e-9e80de970b9c?access_key=PMAT-01H1BBGFJKJ3TRXKWYHDBXRDJE', 
 reporters: 'htmlextra',
 iterationCount: 1,
 reporter: { 
 htmlextra: { 
 export: './Reports/report.html', // If not specified, the file  will be written to `newman/` in the current working directory.  } 
 } 
  }
}, function (err) { 
 if (err) { throw err; } 
 console.log('Collection run complete!'); 
}); 
