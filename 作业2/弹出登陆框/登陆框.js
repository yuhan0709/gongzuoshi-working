$(document).ready(function(){
	$("#dl").click(function(){
		$("#back").show();
		$("#bd").show();
	})
	$("#close").click(function(){
		$("#back").hide();
		$("#bd").hide();
	})
});
  window.onload=function(){
    var bda=document.getElementById('bd');
    bda.onmousedown=function(e){
      var e = e || window.event;
      disX = e.clientX - this.offsetLeft;
      disY = e.clientY - this.offsetTop;

    document.onmousemove=function(ev){
        var oEvent=ev||event;
      bda.style.left=(oEvent.clientX-disX)+'px';
      bda.style.top=(oEvent.clientY-disY)+'px';      
    }
    document.onmouseup=function(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

  }