const request = require('request');
const fs = require('fs');

// app that downloads resource at a URL to the local path on machine.
// Upon completion print "Downloaded and saved <number> bytes to ./<path>."
// app takes two CLI arguments
//    a URL
//    a local file path

// CLI args for URL and local file path
const url = process.argv[2];
const path = process.argv[3];

// Make the request using given arguments
request(url, (error, response, body) => {
  fs.writeFile(path, body, err => {
    if (err) {
      console.log(err);
      return;
    }
  });
});

