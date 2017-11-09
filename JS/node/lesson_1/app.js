//Problem: We need a simple way to look at a user's badge count and Javascript points
const https = require('https');

//Require http for modules
const http = require('http');

//Print Error Messages
function printError(error) {
	console.error(error);
}
const username = "blakebaxendell";
//Solution: Use node.js to connect to treehouse api to get profile information to print out
function printMessage(username, badgeCount, points) {
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
	console.log(message);
}

//Connect to Treehouse API (https://teamtreehouse.com/username.json)
function getProfile(username) {
	try {
		const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
	      // Read the data
	      if(response.statusCode === 200){
		      let body = '';
		      response.on('data', (info) => {
		        body += info.toString();
		      });
		      response.on('end', () => {
		        try{
			         // Parse the data
			         const profile = JSON.parse(body);
			         // Print the data
			         printMessage(username, profile.badges.length, profile.points.JavaScript);
	       		} catch(error) {
	       			printError(error);
	       		}
		       });
	  		} else {
	  			const message = `There was an error getting the profile for ${username} (${http.STATUS_CODE[response.statusCode]})`;
	  			const statusCodeError = new Error();
	  			printError(statusCodeError);
	  		}
		});
		request.on('error', printError(error));
	} catch(error) {
		printError(error);
	}
}
//console.log(process.argv);
const users = process.argv.slice(2);
users.forEach( getProfile);
