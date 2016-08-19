
function calc(){
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var IntNum1=parseInt(num1);
	var IntNum2=parseInt(num2);
	if(IntNum1>IntNum2){
		alert(num1);
	}
	else{
		alert(num2);
	}
}
