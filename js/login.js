window.onload=function(){
	
}


function deleteValue(){
	var clearValue=document.getElementById('user').value="";
	document.getElementById('user').focus();
}


function tijiao(ID){
	var userValue=document.getElementById('user').value;
	var passwdValue=document.getElementById('password').value;
	if(passwdValue=="123"){
		window.location.href='index.html';
	}else{
		alert("密码错误，请重新登录！");
	}
	
	window.localStorage.setItem('loginState',true);
	window.localStorage.setItem('user',document.getElementById(ID).value);
}


var mx=parseInt(document.getElementById('bd').style.marginLeft);
var a;
function login(){
	a=setInterval(changeMargin,1);
	document.getElementById('loginId').style.display="none";
	document.getElementById('registerId').style.display="none";
}

function changeMargin(){
	document.getElementById("bd").style.marginLeft=mx+"px";
	mx+=10;
	if(mx>=200){
		clearInterval(a)
	}
}



