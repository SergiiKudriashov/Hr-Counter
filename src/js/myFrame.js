
var myFrame = (function (){
	'use strict';
	var data = {
		'templates' : { },
		'constants' : { },
		'routes' : []
	},
	api = {
		'templates': function (key, val) {
			data.templates[key] = val(); 
			console.log(data.templates);
		},
		'constants': function (key, val) {
			data.constants[key] = val(); 
			console.log(data.constants);
		},
		'routes' :  function(route, controller){
			var temp = {'path':route, 'handler':controller };
			data.routes.push(temp);
			console.log(data.routes);
		},
		'module': function (key, arrayArg) {
			if(key.startsWith('my')){
				var last_index = arrayArg.length-1;
				var dependancies = arrayArg.slice(0, -1);
				console.log(last_index + "dependancies" + dependancies);
			}
			else {
				console.log( key +" module error. Please start modulename with 'my'");
			}
		}

	}

	function templates() {
		api.templates(arguments[0], arguments[1]);
	}
	
	function module(){
		api.module(arguments[0], arguments[1]);
	}

	function constants() {
		api.constants(arguments[0], arguments[1]);
		console.log('const');
		console.log('');
	}

	function routes(){
		api.routes(arguments[0], arguments[1]);
	}

	function init () {
		console.log('initiation')
		return;
	}

	init();

	return {
		'templates' : templates,
		'constants' : constants,
		'module' : module,
		'routes' : routes
	}
});