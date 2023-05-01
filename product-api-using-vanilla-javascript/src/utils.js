const fs = require('fs');

const getRequestData = (req) => {
 // Write logic here to read the request body data
 return new Promise((resolve, reject) => {
    body = '';
    try{
        req.on('data', data =>{
            body += data.toString();
        });
        req.on('end', ()=>{
            resolve(body);
        });
    }catch(err){
        reject(err);
    }
 });
}

module.exports = getRequestData