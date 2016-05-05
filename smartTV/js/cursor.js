var cursorOffset = {
   left : 79.5
 , top  : 40.3
}

function myFunction(e){
    var $cursor = document.getElementById('cursor');
	$cursor.style.left = (e.pageX - cursorOffset.left) + 'px';
	$cursor.style.top = (e.pageY - cursorOffset.top) + 'px';
	$cursor.style.display= 'block';
	$('#cursor').css("cursor","none");
}
function clearCursor(e){
	var $cursor = document.getElementById('cursor');
	$cursor.style.display= 'none';
	$('#cursor').css("cursor","none");
}


function cursorGo(e){
	var $cursor = document.getElementById('cursor');
	$('#cursor').css('background-image', 'url("' + 'img/cursor.gif' + '?x=' + Date.now() + '")' );
	$('#cursor').css("cursor","none");

}