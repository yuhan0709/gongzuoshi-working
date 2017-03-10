window.onload=function(){
	var dha=document.getElementById('dh').getElementsByTagName('input');
	var zx=document.getElementById('nr');
    var sj=document.getElementById('nr1');
    var pl=document.getElementById('nr2');
        sj.style.visibility="hidden";
    	pl.style.visibility="hidden";
    	zx.style.visibility="visible";
    dha[0].onmouseover=function(){
    	sj.style.visibility="hidden";
    	pl.style.visibility="hidden";
    	zx.style.visibility="visible";
    	dha[0].style.backgroundColor="#FE4800";
    	dha[0].style.color="white";
    	dha[2].style.backgroundColor="#F2F2F2";
    	dha[2].style.color="#525252";
    	dha[1].style.backgroundColor="#F2F2F2";
    	dha[1].style.color="#525252";
    }
     dha[1].onmouseover=function(){
    	zx.style.visibility="hidden";
    	pl.style.visibility="hidden";
    	sj.style.visibility="visible";
    	dha[1].style.backgroundColor="#FE4800";
    	dha[1].style.color="white";
    	dha[0].style.backgroundColor="#F2F2F2";
    	dha[0].style.color="#525252";
    	dha[2].style.backgroundColor="#F2F2F2";
    	dha[2].style.color="#525252";
        
    }
     dha[2].onmouseover=function(){
    	zx.style.visibility="hidden";
    	sj.style.visibility="hidden";
    	pl.style.visibility="visible";
    	dha[2].style.backgroundColor="#FE4800";
    	dha[2].style.color="white";
    	dha[0].style.backgroundColor="#F2F2F2";
    	dha[0].style.color="#525252";
    	dha[1].style.backgroundColor="#F2F2F2";
    	dha[1].style.color="#525252";
    }
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