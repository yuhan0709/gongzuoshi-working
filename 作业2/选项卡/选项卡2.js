window.onload=function(){
	var x1=document.getElementById('1la');
	var x2=document.getElementById('2la');
	var tb4=document.getElementById('table4');
	var tb5=document.getElementById('table5')
	tb4.style.visibility="hidden";
    tb5.style.visibility="hidden";
	x1.onmouseover=function(){
		tb4.style.visibility="visible";
		tb5.style.visibility="hidden";
	}
	x2.onmouseover=function(){
		tb4.style.visibility="hidden";
		tb5.style.visibility="visible";
	}
	x1.onmouseout=function(){
	tb4.style.visibility="hidden";
    tb5.style.visibility="hidden";
	}

	x2.onmouseout=function(){
	tb4.style.visibility="hidden";
    tb5.style.visibility="hidden";
	}

}