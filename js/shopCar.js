window.onload=function(){
	var tr=document.getElementsByClassName('tr');
	var checkInputs=document.getElementsByClassName('check');
	for(var i=0;i<tr.length;i++){
		tr[i].getElementsByTagName('input')[1].value=1;
	}
	for(var i=0;i<checkInputs.length;i++){
		checkInputs[i].checked=false;
	}

};
var cartTable=document.getElementById('cartTable');
var checkAll=document.getElementsByClassName('checkAll');
var tr=document.getElementsByClassName('tr');
var checkInputs=document.getElementsByClassName('check');
var price=document.getElementById('price').innerHTML;
var numb=document.getElementById('number').value;
var sum=document.getElementById('sum');
var total=document.getElementById('total');
var selected=document.getElementById('selected');
var music=document.getElementById('music');

for(var i=0;i<checkInputs.length;i++){
	checkInputs[i].onclick=function(){
		if(this.className=='checkAll check'){
			for(var j=0;j<checkInputs.length;j++){
				checkInputs[j].checked=this.checked;
			}
		}
		if(this.checked==false){
			for(var k=0;k<checkAll.length;k++){
				checkAll[k].checked=false;
			}
		}
		
		count();
	}
}

function count(){
	var selecteds=0;
	var totals=0;
	for(var i=0;i<tr.length;i++){
		if(tr[i].getElementsByTagName('input')[0].checked){
			selecteds+=parseInt(tr[i].getElementsByTagName('input')[1].value);
			totals+=parseFloat(tr[i].getElementsByTagName('td')[5].innerHTML);
		}
	}
	total.innerHTML=totals.toFixed(2);
	selected.innerHTML=selecteds;
	
}


function xiaoji(tr){
	var danjia=parseFloat(tr.getElementsByTagName('td')[3].innerHTML).toFixed(2);
	var shuliang=tr.getElementsByTagName('input')[1].value;
	var subTotal=parseFloat(danjia*shuliang).toFixed(2);
	tr.getElementsByTagName('td')[5].innerHTML=subTotal;
	
}


for(var i=0;i<tr.length;i++){
	tr[i].onclick=function(e){
		e=e || window.event;
		var el=e.srcElement;
		var cls=el.className;
		var input=this.getElementsByTagName('input')[1];
		var val=parseInt(input.value);
		switch(cls){
			case 'add':
				input.value=val+1;
				xiaoji(this);
				count();
				break;
			case 'reduce':
				if(input.value>1){
					input.value=val-1;
				}
				xiaoji(this);
				count();
				break;
			default:
				break;	
		}
		
	}
}


function jiesuan(){
	window.location.href="pay.html";
}




function play(){
	music.play();
}

function pause(){
	music.pause();
}

function load(){
	music.load();
}

function up(){
	if(music.volume<=1){
		music.volume=music.volume+0.2;
	}
}

function down(){
	
	if(music.volume>0){
		music.volume=music.volume-0.2;
	}
}

new Vue({
	el: '#lg',
	data:{
		loginState:window.localStorage.getItem('loginState'),
		user:window.localStorage.getItem('user')
	}
})

function quit(){
	window.localStorage.removeItem('user');
	window.localStorage.removeItem('loginState');
	top.location.href="login.html"
}







