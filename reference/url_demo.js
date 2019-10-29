const url = require('url');

const myurl =new URL ('http://mydomain.com:8080/hello.html?id=100&status=active');

//seralized url
console.log(myurl.href);
console.log(myurl.toString());

//Host (root domain)
console.log(myurl.host);

//hostname (doesnot show port)
console.log(myurl.hostname);

//search
console.log(myurl.search);

//pathname
console.log(myurl.pathname);

//Create Param object
console.log(myurl.searchParams);

//Add param
myurl.searchParams.append('abc', '123');
console.log(myurl.searchParams);

//loop param
myurl.searchParams.forEach((value, name) => console.log(name, value));