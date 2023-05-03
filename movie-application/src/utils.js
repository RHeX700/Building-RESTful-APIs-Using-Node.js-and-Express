getRequestData = (req) => {
  return new Promise((resolve, reject) => {
   // Write logic to read the request body data here
    body = '';
    req.on('data', data => {
      body += data.toString();
    });

    req.on('end', () => {
      resolve(body);
    });

    req.on('error', err => {
      reject(err);
    });
  });
}

module.exports = getRequestData