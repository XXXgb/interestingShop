var music=document.getElementById('music');

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
	window.location.href="login.html"
}


var inputchange = document.getElementById("search_text");
	inputchange.oninput = function(){
		var keyword = document.getElementById("search_text").value;
		var script = document.createElement("script");
		script.src="https://suggest.taobao.com/sug?code=utf-8&q="+keyword+"&callback=xixi";
		var head = document.querySelector("head");
		head.appendChild(script);
		window['xixi'] = function(data){
			var li="";
			for(var i=0;i<data.result.length;i++){
				var result = data.result[i][0];
				li += "<li>"+result+"</li>";
			}
			var ul = document.getElementById("search_result");
			if(li!=""){
				ul.style.display="block";
			}else{
				ul.style.display="none";
			}
			ul.innerHTML = li;
		}
	}
	inputchange.onfocus = function(){
		var keyword = document.getElementById("search_text").value;
		var script = document.createElement("script");
		script.src="https://suggest.taobao.com/sug?code=utf-8&q="+keyword+"&callback=xixi";
		var head = document.querySelector("head");
		head.appendChild(script);
		window['xixi'] = function(data){
			var li="";
			for(var i=0;i<data.result.length;i++){
				var result = data.result[i][0];
				li += "<li>"+result+"</li>";
			}
			var ul = document.getElementById("search_result");
			if(li!=""){
				ul.style.display="block";
			}else{
				ul.style.display="none";
			}
			ul.innerHTML = li;
		}
	}
	inputchange.onblur = function(){
			var ul = document.getElementById("search_result");
			ul.style.display="none";
		
	}



$("#change_weather").hover(function() {
	$("#show_change").fadeIn('show', function() {
		$("#show_weather").fadeOut('show',function(){
			$("#show_weather").css('display', 'none');
		})
		$("#show_change").css('display', 'block');
	});
}, function() {
	if($("#show_change").hover(function() {
		return true;
	})){
		$("#show_change").hover(function() {
		$("#show_change").fadeIn('show', function() {
			$("#show_change").css('display', 'block');
		});
		}, function() {
			$("#show_change").css('display', 'none');
		});
	}else{
		$("#show_change").fadeOut('show', function() {
			$("#show_change").css('display', 'none');
		});
	}
});

$("#hover_weather").hover(function() {
	$("#show_weather").fadeIn('show', function() {
		$("#show_change").fadeOut('show',function(){
			$("#show_change").css('display', 'none');
		})
		$("#show_weather").css('display', 'block');
	});
}, function() {
	if($("#show_weather").hover(function() {
		return true;
	})){
		$("#show_weather").hover(function() {
		$("#show_weather").fadeIn('show', function() {
			$("#show_weather").css('display', 'block');
		});
		}, function() {
			$("#show_weather").css('display', 'none');
		});
	}else{
		$("#show_weather").fadeOut('show', function() {
			$("#show_weather").css('display', 'none');
		});
	}
});




function dynamicIp(){
	$.ajax({
		url: 'https://bird.ioliu.cn/ip',
		type: 'get',
		dataType: 'jsonp',
		success:function(data){	
			var cityip = data.data.ip;
			dynamicGetWeather(cityip);
		}
	})
}

dynamicIp();


function dynamicGetWeather(cityip){
	var pattern = new RegExp("[\u4E00-\u9FA5]+");
	if(pattern.test(cityip)){
		$.ajax({
		url: 'https://www.tianqiapi.com/api/?version=v1&city='+cityip,
		type: 'get',
		dataType: 'jsonp',
		success:function(data){
			$('#city').text(data.city);
			$('#time').text("当前时间："+data.data[0].date.slice(5));
			$('#updata_time').text("预报更新时间："+data.update_time);
			$('#weather').text("天气："+data.data[0].wea);
			$('#air_level').text("空气质量："+data.data[0].air_level);
			$('#max_wendu').text("最高温度："+data.data[0].tem1);
			$('#min_wendu').text("最低温度："+data.data[0].tem2);
			console.log(data);
		}
	})
	}else{
		$.ajax({
		url: 'https://www.tianqiapi.com/api/?version=v1&ip='+cityip,
		type: 'get',
		dataType: 'jsonp',
		success:function(data){
			$('#city').text(data.city);
			$('#time').text("当前时间："+data.data[0].date.slice(5));
			$('#updata_time').text("预报更新时间："+data.update_time);
			$('#weather').text("天气："+data.data[0].wea);
			$('#air_level').text("空气质量："+data.data[0].air_level);
			$('#max_wendu').text("最高温度："+data.data[0].tem1);
			$('#min_wendu').text("最低温度："+data.data[0].tem2);
			console.log(data);
		}
	})
	}
	
}



$("#show_change span").click(function(event) {
	var cityName = $(this).text();
	dynamicGetWeather(cityName);
});


 $(document).scroll(function(){
 	var height = $(document).scrollTop();
 	if(height >= '200'){
 			$(".fixed").css("top","20px");
 			$(".controlMusic").css("top","20px");
 	}else{
 			$(".fixed").css("top","170px");
 			$(".controlMusic").css("top","170px");
 	}
 })


function server(){
	document.getElementById("headerBar").scrollIntoView(false);
}

server();