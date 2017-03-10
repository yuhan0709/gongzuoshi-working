window.onload=function(){
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var lb=document.getElementById('lb');
	var dianji=document.getElementById('dianji');
	var dian=document.getElementsByTagName('li');
	var n=0;
	var timea=null;
function zd(){
    timea=setInterval(function(){
    n++;
    if(n==6) n=0;
    lb.style.marginLeft=(-40+n*(-900))+'px';
    dianji.style.marginLeft=(15+n*142)+'px';
 },2000)
};
zd();
	right.onclick=function(){
		// var nowleft=document.getElementById('lb').style.marginleft;
        n++;
        if(n==6) n=0;
        lb.style.marginLeft=(-40+n*(-900))+'px';
        dianji.style.marginLeft=(15+n*142)+'px';
	};
	left.onclick=function(){
		if(n==-1) n=5;
		lb.style.marginLeft=(-40+n*(-900))+'px';
		dianji.style.marginLeft=(15+n*142)+'px';
		n--;
	};

	dian[6].onclick=function(){
        lb.style.marginLeft=(-40+0*(-900))+'px';
        dianji.style.marginLeft=((15+0*142))+'px';
        n=0;
	};
	dian[7].onclick=function(){
		 lb.style.marginLeft=(-40+1*(-900))+'px';
        dianji.style.marginLeft=((15+1*142))+'px';
        n=1;
	};
	dian[8].onclick=function(){
		 lb.style.marginLeft=(-40+2*(-900))+'px';
        dianji.style.marginLeft=((15+2*142))+'px';
        n=2;
	};

    dian[9].onclick=function(){
		 lb.style.marginLeft=(-40+3*(-900))+'px';
        dianji.style.marginLeft=((15+3*142))+'px';
        n=3;
	};

    dian[10].onclick=function(){
		 lb.style.marginLeft=(-40+4*(-900))+'px';
        dianji.style.marginLeft=((15+4*142))+'px';
        n=4;
	};
    dian[11].onclick=function(){
		 lb.style.marginLeft=(-40+5*(-900))+'px';
        dianji.style.marginLeft=((15+5*142))+'px';
        n=5;
	 };
 //    function zd(){
 //    	timea=setsetInterval(function(){
 //        n++;
 //        if(n==6) n=0;
 //        lb.style.marginLeft=(-40+n*(-900))+'px';
 //        dianji.style.marginLeft=(15+n*142)+'px';
 //    	},2000)
 //    }


}