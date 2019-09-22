window.onload=function(){
	document.getElementById('number').value=1;
}
function changeImg1(){
	document.getElementById('big_img').src="images/detail_1.jpg";
}
function changeImg2(){
	document.getElementById('big_img').src="images/detail_7.jpg";
}
function changeImg3(){
	document.getElementById('big_img').src="images/detail_8.jpg";
}
function changeImg4(){
	document.getElementById('big_img').src="images/detail_9.jpg";
}

function reduce(){
	var number=document.getElementById('number').value;
	if(number>1){
		number--;
	}
	document.getElementById('number').value=number;
}
function add(){
	var number=document.getElementById('number').value;
	number++;
	document.getElementById('number').value=number;
}



var sizeNode=document.getElementById('choeSize').childNodes;
for(var i=1;i<sizeNode.length;i++){
	sizeNode[i].onmousemove=function(){
		var chooseSize=this.style.border;
		if(chooseSize=="1px solid rgb(131, 131, 131)"){
			this.style.border="2px solid red";
		}
		
	}
	sizeNode[i].onmouseout=function(){
		var chooseSize=this.style.border;
		if(chooseSize=="2px solid red"){
			this.style.border="1px solid rgb(131, 131, 131)";
			
			
		}else{
			this.style.border="3px solid red";
		}
	}
	sizeNode[i].onclick=function(){
		var chooseSize=this.style.border;
		if(chooseSize=="2px solid red"){
			for(var j=1;j<sizeNode.length;j++){
				sizeNode[j].style.border="1px solid rgb(131, 131, 131)";
			}
			this.style.border="3px solid red";
		}else{
			this.style.border="1px solid rgb(131, 131, 131)";
		}
	}
}


var colorNode=document.getElementById('choeColor').childNodes[1].childNodes;
for(var i=0;i<colorNode.length;i++){
	colorNode[i].onmousemove=function(){
		var chooseColor=this.style.border;
		if(chooseColor=="1px solid rgb(131, 131, 131)"){
			this.style.border="2px solid red";
		}
	}
	colorNode[i].onmouseout=function(){
		var chooseColor=this.style.border;
		if(chooseColor=="2px solid red"){
			this.style.border="1px solid rgb(131, 131, 131)";
		}else{
			this.style.border="3px solid red";
		}
	}
	colorNode[i].onclick=function(){
		var chooseColor=this.style.border;
		if(chooseColor=="2px solid red"){
			for(var j=0;j<colorNode.length;j++){
				colorNode[j].style.border="1px solid rgb(131, 131, 131)";
			}
			this.style.border="3px solid red";
		}else{
			this.style.border="1px solid rgb(131, 131, 131)";
		}
	}
}


var huabeiNode=document.getElementById('huabei').childNodes;
for(var i=1;i<huabeiNode.length;i=i+2){
	huabeiNode[i].onmousemove=function(){
		var chooseHuabei=this.style.border;
		if(chooseHuabei=="1px solid rgb(131, 131, 131)"){
			this.style.border="2px solid red";
		}	
	}
	huabeiNode[i].onmouseout=function(){
		var chooseHuabei=this.style.border;
		if(chooseHuabei=="2px solid red"){
			this.style.border="1px solid rgb(131, 131, 131)";
		}else{
			this.style.border="3px solid red";
		}
	}
	huabeiNode[i].onclick=function(){
		var chooseHuabei=this.style.border;
		if(chooseHuabei=="2px solid red"){
			for(var j=1;j<huabeiNode.length;j=j+2){
				huabeiNode[j].style.border="1px solid rgb(131, 131, 131)";
			}
			this.style.border="3px solid red";
		}else{
			this.style.border="1px solid rgb(131, 131, 131)";
		}
	}
}


function pay(){
	window.location.href="pay.html";
}





