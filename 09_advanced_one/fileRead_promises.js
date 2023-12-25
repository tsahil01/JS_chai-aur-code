const fs = require('fs');

const readFileAsync = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFileAsync('file.txt')
  .then(data => {
    // Handle file content
  })
  .catch(error => {
    // Handle error
  });
