$(document).ready(function() {

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	
	function getRandom (itemArray) {
		var random = Math.floor(Math.random() * itemArray.length);
		return itemArray[random];
	
	}; // Function to return random neighbourhood from array 

	var group1 = ["Yorkville","Forest Hill"];
	// Group 1 -- Points 8-13
	var group2 = ["The Beaches","Distillery District"];
	// Group 2 -- Points 14 - 19
	var group3 = ["Leslieville","Liberty Village"];
	// Group 3 -- Points 20 - 25
	var group4 = ["The Annex","Little Italy"];
	// Group 4 -- Points 26 - 31
	var group5 = ["Chinatown","Kensington"];
	// Group 5 -- Points 32 - 37
	var group6 = ["Dundas West","The Junction"];
	// Group 6 -- Points 38 - 42
	var group7 = ["Bloordale/Bloorcourt","Parkdale"];
	// Group 7 -- Points 43 - 48
	var answers = 0;
	var result = "";

	$('input[type=submit]').click(function(evnt) {
		evnt.preventDefault(); // Prevent submit form from reloading the page
		$('input:checked').each(function() {
	    	var value = $(this).val();
	    	var num = parseInt(value);
	    	answers += num;
	  	}); 
    	if (answers >= 8 && answers <= 13) {
    		result = getRandom(group1);
    		if (result==="Yorkville") {
    			$(".yorkville").removeClass("hidden");
    		} else {
    			$(".forestHill").removeClass("hidden");
    		}
    	} else if (answers >= 14 && answers <= 19) {
    		result = getRandom(group2);
    		if (result==="The Beaches") {
    			$(".beaches").removeClass("hidden");
    		} else {
    			$(".distillery").removeClass("hidden");
    		}
    	} else if (answers >= 20 && answers <= 25) {
    		result = getRandom(group3);
    		if (result==="Leslieville") {
    			$(".leslieville").removeClass("hidden");
    		} else {
    			$(".liberty").removeClass("hidden");
    		}
    	} else if (answers >= 26 && answers <= 31) {
    		result = getRandom(group4);
    		if (result==="The Annex") {
    			$(".annex").removeClass("hidden");
    		} else {
    			$(".littleItaly").removeClass("hidden");
    		}
    	} else if (answers >= 32 && answers <= 37) {
    		result = getRandom(group5);
    		if (result==="Chinatown") {
    			$(".chinatown").removeClass("hidden");
    		} else {
    			$(".kensington").removeClass("hidden");
    		}
    	} else if (answers >= 38 && answers <= 42) {
    		result = getRandom(group6);
    		if (result==="Dundas West") {
    			$(".dundas").removeClass("hidden");
    		} else {
    			$(".junction").removeClass("hidden");
    		}
    	} else {
    		result = getRandom(group7);
    		if (result==="Bloordale/Bloorcourt") {
    			$(".bloor").removeClass("hidden");
    		} else {
    			$(".parkdale").removeClass("hidden");
    		}
    	}	
	
    }); //Ends the submit

	$('.close').click (function () {
		$('.result-container').addClass("hidden");
	});
});