//Problem: We need a simple way to look at a user's badge count and Javascript points
//Solution: Use node.js to connect to treehouse api to get profile information to print out

const profile = require('./profile');

//console.log(process.argv);
const users = process.argv.slice(2);
users.forEach(profile.get);
