/*
 * Name: Angela Huang
 * Course: CSC 415 (Software Engineering)
 * Semester: Spring 2015
 * Instructor: Dr. Pulimood
 *
 * Project Name: The Roommate Application 
 * Description: a website that allows roommates to track living obligations via chore assignements and communicate through a notfications and feedback page
 *
 * Filename: generateChores.js
 * Description: This file assigns chores by reading in user input from the viewChores.html page. It stores the corresponding values 
 * from the buttons selected in an array implementation of a stack. 
 * Before the values are sorted and partitioned, another array is allocated to keep track of 
 * the chores that the values correspond to. The arrays are then passed to the quickSort() algorithm which sorts the array of values. 
 * The greedyPartition() algorithm then paritions the arrays into two sets with a minium difference between their sum of values. 
 * The corresponding chore names contained within each set is then printed onto the rankChores() page. 
 *
 * Last Modified: April 28, 2015
 *
 */

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

function createAccount () {
	
	// gets references to user input
	var inputFirstName = document.getElementById('firstName').value;
	var inputLastName = document.getElementById('lastName').value;
	var inputBuilding= document.getElementById('building').value;
	var inputUsername = document.getElementById('username').value;
	var inputPassword = document.getElementById('password').value;
	
	//Sets pattern to input containing only letters
        var letters = /^[A-Za-z]+$/;  
        
        //Sets pattern to input containing letters, numbers, and underscores
        var lettersNumbersUnderscore = /^[a-zA-Z0-9_]+$/;
        
        //Checks whether the first, last name, and building contain only letters, and whether the username and password
        //contain only letters, numbers, and underscores and handles exceptions accordingly 
        if (!(inputFirstName.match(letters)) || !(inputLastName.match(letters)) || !(inputBuilding.match(letters)) || !(inputUsername.match(lettersNumbersUnderscore)) || !(inputPassword.match(lettersNumbersUnderscore))) {
      		alert ("Invalid input!  Note: Name and Building should only contain letters. Username and Password should only contain letters, numbers, and underscores.");
	}
	
	else {
      		alert ("Account successfully created.");  
     		document.location.href = '../View/rankChores.html'
      }  
}
