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
		type: {type: String, default: "goldfish"},
		size: String,
		color: {type: String, default: "golden"},
		mass: {type: Number, default: 0.007},
		name: {type: String, default: "Angela"}
	});

	AnimalSchema.pre("save", function(next){
		
	});

	var Animal = mongoose.model("Animal", AnimalSchema);

	var elephant = new Animal({
		type: "elephant",
		color: "gray",
		mass: 6000,
		name: "Lawrence"
	});

	var animal = new Animal({}); //Goldfish

	var whale = new Animal({
		type: "whale",
		mass: 190500,
		name: "Fig"
	});

	var animalData = [
		{
			type: "mouse",
			color: "gray",
			mass: 0.035,
			name: "Marvin"
		},
		{
			type: "nutria",
			color: "brown",
			mass: 6.35,
			name: "Gretchen"
		},
		{
			type: "wolf",
			color: "gray",
			mass: 45,
			name: "Iris"
		},
		elephant,
		animal,
		whale
	];

	Animal.remove({}, function(err){
		if (err) console.error(err);
		Animal.create(animalData, function(err, animals){
			if (err) console.error(err);
			Animal.find({size: "big"}, function(err, animals){
				animals.forEach(function(animal){
					console.log(animal.name + "the" + animal.color + " " + animal.type);
				});
				db.close(function(){
					console.log("db connection closed");
				});
			});
		});
	});
	/*
	elephant.save(function(err) {
		if(err) console.error("save failed.", err);
		else console.log("saved!");
		db.close(function(){
			console.log("db connection closed");
		});
	});
	*/
});