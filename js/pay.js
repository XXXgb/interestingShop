
var ul=document.getElementById('liId');
var li=ul.getElementsByTagName('li');
for(var i=0;i<li.length;i++){
	li[i].onclick=function(e){
		var dizhi1=this.style.backgroundImage;
		if(dizhi1=="url(\"images/peraddressbg.png\")"){
			this.style.backgroundImage="url(images/peraddressbg.png)";
		}else{
			
			for(var j=0;j<li.length;j++){
				li[j].style.backgroundImage="url(images/peraddressbg_1.png)";
			}
			this.style.backgroundImage="url(images/peraddressbg.png)";
		}
	}
	li[i].onmousemove=function(e){
		var dizhi1=this.style.backgroundImage;
		if(dizhi1=="url(\"images/peraddressbg.png\")"){
			this.style.backgroundImage="url(images/peraddressbg.png)";
		}else{
			this.style.backgroundImage="url(images/peraddressbg_2.png)";
		}
	}
	li[i].onmouseout=function(e){
		var dizhi1=this.style.backgroundImage;
		if(dizhi1=="url(\"images/peraddressbg.png\")"){
			this.style.backgroundImage="url(images/peraddressbg.png)";
		}else{
			this.style.backgroundImage="url(images/peraddressbg_1.png)";
		}
	}
}















