window.onload = function(){
	var pumpHolder = document.getElementById('pump-holder');
	pumpHolder.innerHTML = '<select> </select>';
	var selectPump = pumpHolder.getElementsByTagName('select');
	for (var key in pumps){
		var addInner = selectPump.innerHTML;
		var a = key;
		console.log(a);
			// selectPump.innerHTML += '<option> One' + pumps.key.type + '</option>';
			selectPump.innerHTML += '<option> One' + '</option>';
	};
};