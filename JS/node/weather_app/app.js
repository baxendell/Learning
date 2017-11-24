//Get Weather Api
const weather = require('./weather');
//Join mulitple values passed and replace all spaces with underscores
const query = process.argv.slice(2).join("_").replace('', '_');
//Spit Out API info
weather.get(query);