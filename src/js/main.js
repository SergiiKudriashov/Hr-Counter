window.onload = function(){
	var pumpHolder = document.getElementById('pump-holder');
	pumpHolder.innerHTML = '<select></select>';
	var selectPump = pumpHolder.getElementsByTagName('select');
		selectPump.inner = ''; 
	for (var key in pumps){
		var addInner = selectPump.innerHTML;
			selectPump.innerHTML = addInner + '<option> One' + '</option>';
	};
};
function pumpGenerate() {
 var pumpHolder = document.getElementById('pump-holder');
	pumpHolder.innerHTML = '<select></select>';
	var selectPump = pumpHolder.getElementsByTagName('select');
			for (var key in pumps){
		var addInner = selectPump.innerHTML;
			selectPump.innerHTML = addInner + '<option> One' + '</option>';
	};
}