const newman = require('newman'); 
newman.run({ 
 //collection: require("./b2b7APIdmoney.json"), 
 collection: 'https://api.postman.com/collections/18755112-ef04e5b6-5f95-4519-a72a-89a5244a4f26?access_key=PMAT-01H1FZPNQ359XWBBC16KJYCRD6', 
 reporters: 'htmlextra',
 iterationCount: 1,
 reporter: { 
 htmlextra: { 
 export: './Reports1/report.html', // If not specified, the file  will be written to `newman/` in the current working directory.  } 
 } 
  }
}, function (err) { 
 if (err) { throw err; } 
 console.log('Collection run complete!'); 
}); 
