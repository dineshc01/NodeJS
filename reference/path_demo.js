const path = require('path');

//Give File name
console.log(path.basename(__filename));

//Give dir name
console.log(path.dirname(__filename));

//Gives extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);
