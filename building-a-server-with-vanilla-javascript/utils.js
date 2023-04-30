getRequestData= req => new Promise((resolve, reject) =>{
    try {
        let body = '';

        req.on('data', data => {
            body += data.toString();
        });

        req.on('end', () => {
            resolve(body);
        });
    } catch (error) {
        reject(error);
    }
});

module.exports = getRequestData;