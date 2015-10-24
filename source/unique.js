var getUniq = function() {

 	var data = [];

data[0] = new Date.getTime();

data[1] = navigator.userAgent

data[2] = navigator.oscpu

	return data.join("");

};



