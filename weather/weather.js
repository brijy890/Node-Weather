const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url : `https://api.darksky.net/forecast/d61b0eb4bb751f5581f6dedd30ef38ec/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode == 200){
            callback(undefined, {
               temp: body.currently.temperature,
               summery: body.currently.summary
            });
        } else{
            callback('Unable to fetch wether');
        } 
    });
};

module.exports.getWeather = getWeather;
