// Creates Directory
const fs = require ('fs');
const path = require ('path');

//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
 //   if (err) throw err;
  //  console.log('Folder Created...');
//});

//Creates File
//fs.writeFile(path.join(__dirname, '/test', 'file2.txt'), 'This is test for creating file.', err => {
  //  if (err) throw err;
    // console.log('File written...');

    //Append file
    // fs.appendFile(path.join(__dirname, '/test', 'file2.txt'), 'This is test2 for creating file.', err => {
       //  if (err) throw err;
        //console.log('File written...');
    // });
// });

// Read Data

// fs.readFile(path.join(__dirname, '/test', 'file2.txt'), 'utf8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
// });

//Rename a file 
fs.rename(path.join(__dirname, '/test', 'file2.txt'), path.join(__dirname, '/test', 'hello.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed..');
 });
 