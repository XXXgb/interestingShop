function register(){
	var user=document.getElementById('user').value;
	var password=document.getElementById('password').value;
	var repeatPassword=document.getElementById('repeatPassword').value;
	var idCar=document.getElementById('idCar').value;
	var phoneNumber=document.getElementById('phoneNumber').value;
	var sex=document.getElementById('sex').value;
	if(user){
		if(password){
			if(repeatPassword){
				if(idCar){
					if(phoneNumber){
						if(password==repeatPassword){
							alert("注册成功，点击确定后跳转至登陆页面！");
							window.location.href='login.html';
						}else{
							alert("前后两次密码不一致，请重新输入！");
						}
					}else{
						alert("手机号码不能为空！");
					}
					
				}else{
					alert("身份证不能为空！");
				}	
			}else{
				alert("确认密码栏不能为空！");
			}
		}else{
			alert("密码不能为空！");
		}
	}else{
		alert("用户名不能为空！");
	}
}





