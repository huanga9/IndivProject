function login() {

    	// get reference to user input
	var inputUsername = document.getElementById('username');
 	var inputPassword = document.getElementById('password');
	
	var valid = false;
	
	for (var i=0; i <users.length; i++) {
		if ((inputUsername == users[i].userName) && (inputPassword == users[i].password)) {
			valid = true;
			break;
		}
	}
	
	if (valid) {
		alert ("Login was successful");
		window.location = "rankChores.html";
		return false;
	}
	
	else {
		alert ("You entered an incorrect username or password. Hint: Username=last name followed by your first initial. Password='se2015'.");
	}
}
