// // $(document).ready(function() {
// // 	fillSelect (pumps,'pump-select');
// // 	pumpPlaceChange();
	
// // 	// 	pumpPlace.addEventListener("change", function() {
// // 	// 	console.log('changed');
// // 	// 	var pumpHolder = document.getElementById('pump-holder');
// // 	// 	var objArr = Object.keys(pumps);
// // 	// 	for (var i = 0, l = pumpPlace.options.length; i < l; ++i) {
// // 	// 	    if (pumpPlace.options[i].selected == true) {
// // 	// 	    	pumpHolder.innerHTML = pumpHolder.innerHTML + "<div class='pump'> Расход "+ pumps[objArr[i]]["volume"] +" л/мин </div>";
// // 	// 	    };
// // 	// 	};
// // 	// 	return;
// // 	// });
// // });


// // // pumpHolder.innerHTML = "<div class='pump'>" + pumps[pumpArray[0]]["type"] + " ";
// // // console.log(pumpHolder.innerHTML);
// // var pumpPlace = document.getElementById('pump-select');

// // function createOption (obj,placeId,inside,i){
// // 	var objArr = Object.keys(obj),
// // 		place = document.getElementById(placeId);
// // 		place.innerHTML += "<option selected value="+[objArr[i]]+">" + obj[objArr[i]][inside] + "</option>";
// // 	return;
// // }

// // function fillSelect (obj,placeId){
// // 	var pumpPlace = document.getElementById(placeId);
// // 	var objArr = Object.keys(obj);
// // 	for (var i = 0, l = objArr.length; i < l; ++i) {
// // 		createOption (obj,"pump-select","type",i);
// // 	};
// // 	return;
// // };


// // var pumpPlaceChange = function() {
// // 	var text = document.getElementById('text');
// // 	var objArr = Object.keys(pumps);
// // 	var textHTML = '';
// // 	for (var i = 0, l = pumpPlace.options.length; i < l; ++i) {
// // 		if (pumpPlace.options[i].selected == true) {
// // 			textHTML = "<div class='pump'> Расход "+ pumps[objArr[i]]["volume"] +" л/мин </div>";
// // 		};
// // 	};
// // 	text.innerHTML = textHTML;
// // };

// // pumpPlace.addEventListener("change", pumpPlaceChange);

// // // var templates = {
// // // 	key: 'testTemplate',
// // // 	inner: '<div><ul><li>Item01</li><li>Item02</li><li>Item03</li><li>Item04</li><li>Item05</li></ul></div>'
// // // }

// // // var app =  myFrame();

// // // app.templates('template1', function(){
// // // 	return {
// // // 		'inner' : '<div><ul><li>Item01</li><li>Item02</li><li>Item03</li><li>Item04</li><li>Item05</li></ul></div>'
// // // 	}
// // // });
// // // app.templates('template2', function(){
// // // 	return {
// // // 		'inner' : '<div><ul><li>Item01</li><li>Item02</li><li>Item03</li><li>Item04</li><li>Item05</li></ul></div>'
// // // 	}
// // // });
// // // app.constants('const1', function(){
// // // 	return {
// // // 		'count' : 1
// // // 	}
// // // });
// // // app.module('myTestModule',[0, 1 ,2 ,3]);
// // // app.routes('/home','TestController');
// // // app.routes('/price','TestTwoController');



var app = mi();
 // console.log(app, 'init');

 //create test const
app.constants('testConts', function(){
  return {
   'item1':'val1',
   'item2':'val2'
  }
});
app.constants('testConts1', function(){
  return {
   'item1':'<div><h1></h1><div>',
   'item2':'val2'
  }
});

//  //create test factory
//  // app.factory('testFactory', ['testConts', function(testConts){
//  //  return {
//  //   'publicAccess': function(){
//  //    // console.log(testConts, 'publicAccess');
//  //   }
//  //  }
//  // }]);
app.routes('','TestContrler1');
app.routes('page','TestContrler');
// create test controller

app.controller('TestContrler', ['testConts', function(a){
  console.log('TestContrler');
  console.log(a);

}]);

app.controller('TestContrler1', ['testConts1', function(a){
	console.log('TestContrler1');
  console.log(a);

}]);

//  // app.controller('AlertContrler', ['testConts', 'testFactory', function(a, f){
//  //  console.log(123);
//  //  alert('AlertContrler');
//  // }]);

//  // app.module('miTestModule', ['testConts', function(con){
//  //  console.log(con, 'miTestModule');

//  // }]);

// app.routes('/','TestContrler');
//  // app.routes('/?some','TestContrler');
// app.routes('alert','AlertContrler');
var resources = {
	'routes' : [ {'handler' : "TestController",	'path' : "/path"}, 
				 {'handler' : "TestControllerZZZ", 'path' : "#path"},
				 {'handler' : "TestControllerZZZ", 'path' : "/"}  ],
	'constants' : { },
	'clearSlashes': function(path) {
			return path.toString().replace(/\/$/, '').replace(/^\//, '');
	}
};


console.clear();
console.log(resources);

routeParams = {};
var keys = resources.clearSlashes(resources.routes[1].path).match(/:([^\/]+)/g);

console.log("/path".toString().replace(/\/$/, '').replace(/^\//, '').match(/:([^\/]+)/g));
	// 	0: {
	// 		'handler' : "TestController",
	// 		'path' : "/path"
	// 	},
	// 	1: {
	// 		'handler' : "TestControllerZZZ",
	// 		'path' : "#path"
	// 	}
	// ],

