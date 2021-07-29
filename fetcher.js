const request = require("request");
const fs = require("fs");

console.log(request.toString());
const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(path, body, 'utf8', (err) => {
    if (err) return console.log('err: ' + err);

    console.log('file write successful!');
  });
});
