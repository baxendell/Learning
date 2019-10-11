'use strict';

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function(err){
	console.error("connection error:", err);
});

db.once("open", function(){
	console.log("Db connection success");
	//All db communication goes here

	var Schema = mongooose.Schema;
	var AnimalSchema = new Schema({
		type: String,
		color: String,
		size: String,
		mass: Number,
		name: String
	});

	var Animal = mongoose.model("Animal", AnimalSchema);

	var elephant = new Animal({
		type: "elephant",
		color: "gray",
		size: "big",
		mass: 6000,
		name: "Lawrence"
	});

	elephant.save(function(err) {
		if(err) console.error("save failed.", err);
		else console.log("saved!");
		db.close(function(){
			console.log("db connection closed");
		});
	});

});