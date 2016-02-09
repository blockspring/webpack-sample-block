var blockspring = require('blockspring');

// This is a separate file that we are loading as a module
var myNameLib = require('./my-name-lib');

// Snowflake is a module that isn't in the Blockspring docker image
var snowflake = require('node-snowflake').Snowflake;

blockspring.define(function(request, response) {
	name = "Hi! My name is " + myNameLib;
	age = " and my age is " + request.params.age.toString();
	id = " and my unique id is " + snowflake.nextId();

	response.addOutput('intro', name + age + id);
	response.end();
});
