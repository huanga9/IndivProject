function login() {

    	// get reference to user input
	var inputUsername = document.getElementById('username').value;
 	var inputPassword = document.getElementById('password').value;
	
	var valid = false;
	
	for (var i=0; i <users.length; i++) {
		if ((inputUsername == users[i].userName) && (inputPassword == users[i].password)) {
			valid = true;
			break;
		}
	}
	
	if (valid) {
		document.location.href = '../View/rankChores.html'
		alert ("Login was successful");
		
	}
	
	else {
		alert ("You entered an incorrect username or password. Hint: Username='user1'. Password='se2015'.");
	}
}

function validateAccount () {
	
	// gets references to user input
	var inputFullName = document.getElementById('name').value;
	var inputBuilding= document.getElementById('building').value;
	var inputUsername = document.getElementById('username').value;
	var inputPassword = document.getElementById('password').value;

        var letters = /^[A-Za-z]+$/;  
        var lettersNumbersUnderscore = /^[a-zA-Z0-9_]+$/;
        if ( !(inputFullName.value.match(letters)) || !(inputBuilding.value.match(letters)) || !(inputUsername.match(lettersNumbersUnderscore)) || !(ivar inputPassword.match(lettersNumbersUnderscore))) {
      		alert ("Invalid input!  Note: Name and Building should only contain letters. Username and Password should only contain letters, numbers, and underscores.");
	}
	
	else {
	
      		alert('Account successfully created.');  
     		document.location.href = '../View/rankChores.html'
      }  
}

