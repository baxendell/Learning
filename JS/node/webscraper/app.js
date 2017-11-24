var request = require("request"),
	cheerio = require("cheerio"),
	url = "https://www.google.com/search?q=car+accident+lawyer",

	corpus = {},
	totalResults = 0,
	resultsDownloaded = 0;

function callback() {
	resultsDownloaded++;

	if(resultsDownloaded !== totalResults) {
		return;
	}

	var words = [];

	//stick all words in an array

	for (prop in corpus) {
		words.push({
			word: prop,
			count: corpus[prop]
		});
	}

	//sort array based on how often they occur
	words.sort(function (a,b){
		return b.count - a.count;
	});

	//finally log the first fifty most popular words
	console.log(words.slice(0, 20));
}

request (url, function(error, response, body) {
	if(error) {
		console.log("Couldn't get page because of error:" + error);
		return;
	}

	// load the body of the page into Cheerio so we can't traverse the dogm
	var $ = cheerio.load(body),
			links = $(".r a");

	links.each(function (i, link) {
		//get the href attribute of each link
		var url = $(link).attr("href");

		//strip out unnecessary junk
		url = url.replace("/url?q=", "").split("&")[0];

		if(url.charAt(0) === "/") {
			return;
		}

		//this link counts as a result, so increment results
		totalResults++;

		//downlad that page
		request(url, function(error, response, body) {
			if(error) {
				console.log("Couldn't get page because of error" + error);
				return;
			}

			//load the page into cheerio
			var $page = cheerio.load(body),
				text = $page("body").text();

			//throw away extra white space and non-alpha characters
			text = text.replace(/\s+/g, " ")
					   .replace(/[^a-zA-Z ]/g, "")
					   .toLowerCase();
			
			//split on spaces for list of all the words on that page and loop through list
			text.split(" ").forEach(function (word) {
				//don't want to include long words
				if(word.length < 4 || word.length > 20 || word === "that" || word === "your") {
					return;
				}

				if(corpus[word]) {
					//if this word is already in our corpus, our collection of terms only increams by one.
					corpus[word]++;
				} else {
					//otherwise say that we have found one of the words
					corpus[word] = 1;
				}
			});

			//and when our request is completed, call the callback to wrap
			callback();

		});
	});
});