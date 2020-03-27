function myFunction() {
	document.getElementById("demo").innerHTML = "This is my First Function.";
	// document.write("<h3>也会怕有一天只你共我</h3>");

	var x = "";
	var time = new Date().getHours();
	if (time < 20) {
		x = "Good Day";
	} else {
		x = "Good Evening";
	}
	document.getElementById("demo").innerHTML = x;

	var m = 6;
	switch (m) {
		case 0:
			x = "结果为：0";
			break;
		case 1:
			x = "结果为：1";
			break;
		case 2:
			x = "结果为：2";
			break;
		default:
			x = "无结果";
			break;
	}
	document.getElementById("demo").innerHTML = x;
}