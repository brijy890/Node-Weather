const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .option({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if(errorMessage){
        console.log(errorMessage);
    } else{
        console.log(JSON.stringify(result.address, undefined, 2));
        weather.getWeather(result.latitude, result.langutude, (errorMessage, weatherResult) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(`Tempreture: ${weatherResult.temp} F`);
                console.log(`Summery: ${weatherResult.summery}`);
            }
        });
    }
});




