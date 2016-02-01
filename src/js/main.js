$(document).ready(function() {
	fillSelect (pumps,'pump-select');
	pumpPlaceChange();
	
	// 	pumpPlace.addEventListener("change", function() {
	// 	console.log('changed');
	// 	var pumpHolder = document.getElementById('pump-holder');
	// 	var objArr = Object.keys(pumps);
	// 	for (var i = 0, l = pumpPlace.options.length; i < l; ++i) {
	// 	    if (pumpPlace.options[i].selected == true) {
	// 	    	pumpHolder.innerHTML = pumpHolder.innerHTML + "<div class='pump'> Расход "+ pumps[objArr[i]]["volume"] +" л/мин </div>";
	// 	    };
	// 	};
	// 	return;
	// });
});


// pumpHolder.innerHTML = "<div class='pump'>" + pumps[pumpArray[0]]["type"] + " ";
// console.log(pumpHolder.innerHTML);
var pumpPlace = document.getElementById('pump-select');

function createOption (obj,placeId,inside,i){
	var objArr = Object.keys(obj),
		place = document.getElementById(placeId);
		place.innerHTML += "<option selected value="+[objArr[i]]+">" + obj[objArr[i]][inside] + "</option>";
	return;
}

function fillSelect (obj,placeId){
	var pumpPlace = document.getElementById(placeId);
	var objArr = Object.keys(obj);
	for (var i = 0, l = objArr.length; i < l; ++i) {
		createOption (obj,"pump-select","type",i);
	};
	return;
};


var pumpPlaceChange = function() {
	var text = document.getElementById('text');
	var objArr = Object.keys(pumps);
	var textHTML = '';
	for (var i = 0, l = pumpPlace.options.length; i < l; ++i) {
		if (pumpPlace.options[i].selected == true) {
			textHTML = "<div class='pump'> Расход "+ pumps[objArr[i]]["volume"] +" л/мин </div>";
		};
	};
	text.innerHTML = textHTML;
};

pumpPlace.addEventListener("change", pumpPlaceChange);

