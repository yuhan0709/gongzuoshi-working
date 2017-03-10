window.onload=function(){
	function checkLength(str){
   var len =0,temp=0;
      for(var j=0;j<str.length;j++){
       temp = 1;
       if(/^[\u2E80-\u9FFF]/.test(str[j])){
         temp = 2;
      }
      len += temp;
     }
     return len;
   }
   // function tijiao(){
   var ainput=document.getElementsByTagName('input');
   var atishi=document.getElementsByTagName('p');
   ainput[0].onclick=function(){
   	atishi[0].innerHTML="字符数为4~16位，必须为大小写字母或中文汉字"
   }
   ainput[0].onmouseout=function(){
   	atishi[0].innerHTML="";
   }
   ainput[1].onclick=function(){
   	atishi[1].innerHTML="字符数为4~16位，必须为大小写字母或数字";
   }
    ainput[1].onmouseout=function(){
   	atishi[1].innerHTML="";
   }
   ainput[0].onblur=function(){
   	var namelength=checkLength(this.value);
    var bz= /[^\A-Za-z0-9\u4e00-\u9fa5]/g;
    if(bz.test(this.value)){
    	atishi[0].innerHTML="含有非法字符！";
    	ainput[0].style.color="red";
    	// return false;
       }else if(this.value==""){
       	atishi[0].innerHTML="请输入用户名！";
    	ainput[0].style.color="red";
       }else if(namelength<4||namelength>16){
        atishi[0].innerHTML="字符数为4~16位！";
    	ainput[0].style.color="red";
       }else{
       	atishi[0].innerHTML=" √  ";
       	ainput[0].style.color="green";
       	      }
    }
    ainput[1].onblur=function(){
    	var codelength=checkLength(this.value);
    	var bz1= /[^\A-Za-z0-9]/g;
    	if(bz1.test(this.value)){
    		atishi[1].innerHTML="含有非法字符！";
    		ainput[1].style.color="red";
    	}else if(this.value==""){
    		atishi[1].innerHTML="请输入密码！";
    		ainput[1].style.color="red";
    	}else if(codelength>16||codelength<4){
    		atishi[1].innerHTML="字符数为4~16位！";
    		ainput[1].style.color="red";
    	}else{
    		atishi[1].innerHTML="√ ";
    		ainput[1].style.color="green";
    	}
    }
      document.getElementById('sb').onclick=function(){
      if(ainput[0].style.color=="green"&&ainput[1].style.color=="green"){
      return  alert('提交成功！');
        
      }else{
      return  alert('提交失败！请检查所填信息');      
      }
    }
}