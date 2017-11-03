//Problem: We need a simple way to look at a user's badge count and Javascript points
const https = require('https');
const username = "blakebaxendell";
//Solution: Use node.js to connect to treehouse api to get profile information to print out
function printMessage(username, badgeCount, points) {
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
	console.log(message);
}

//Connect to Treehouse API (https://teamtreehouse.com/username.json)
function getProfile(username) {
	const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
	          // Read the data
	          let body = '';
	          response.on('data', (info) => {
	            body += info.toString();
	          });
	          response.on('end', () => {
	             // Parse the data
	             const profile = JSON.parse(body);
	             // Print the data
	             printMessage(username, profile.badges.length, profile.points.JavaScript);
	           });

	});
}
//console.log(process.argv);
const users = process.argv.slice(2);
users.forEach( getProfile)