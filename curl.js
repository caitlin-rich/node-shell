const request = require("request")


const curl = (url) => {
    request(url, function(error, response, body){
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    })
}

module.exports = curl;