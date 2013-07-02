window.onload = function() {
	var pushReq = navigator.push.register(),
		time = 0,
		interval = 1000,
		endpoint;
		
	pushReq.onerror = function(err) {
		console.log("failed to register endpoint:", err);
	};
	
	pushReq.onsuccess = function() {
		endpoint = pushReq.result;
		console.log("registered endpoint:", pushReq.result);
	};	

	setInterval(function() {
		time += interval;
		if (!endpoint)
			console.log("push.register() still hasn't responded after", time/1000, "seconds");
	}, interval);
	
	var getReg = navigator.push.registrations();
	getReg.onsuccess = function() {
		console.log("current registrations:", getReg.result);
	};
	
	getReg.onerror = function() {
		console.log("failed to get current registrations");
	};
}