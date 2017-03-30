function myfunction()
{
	
	var getTaskName=document.getElementById("text_form").value;
	document.getElementById("task1").innerHTML=getTaskName;
	document.getElementById("stop1").style.visibility='visible';
	document.getElementById("end1").style.visibility='visible';
	timeCount();


}
var c=0
var t
function timeCount()
{
	document.getElementById("time1").innerHTML=c;
	c++;
	t=setTimeout("timeCount()",1000);
}
function stop()
{
	clearTimeout(t);
}