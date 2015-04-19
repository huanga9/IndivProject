function averageRankings() {
	
	var initialRankings = [2, 3, 5, 3, 5, 4, 2, 1, 4];
	var temp=new Array(9);
	
	//Chore 1:
	// get reference to checkboxes 
	
	var chore1 = $('input[name=rank1]');
	var value1 = myRadio1.filter(':checked').val();
        temp[0]=(initialRankings[0]+value1)/2;
    
	//Chore 2:
	// get reference to checkboxes
    var chore2 = document.getElementsByClassName('vacuum');
    	
    // average values
    for (var i=1; i<=chore2.length; i++) {
        if (chore2[i].checked == true){
        	temp[1]=(initialRankings[1]+i)/2;
    	}
    }
    	
    //Chore 3:
    // get reference to checkboxes 
    var chore3 = document.getElementsByClassName('bath1');
    	
    // average values
    for (var i=1; i<=chore3.length; i++) {
        if (chore3[i].checked == true){
        	temp[2]=(initialRankings[2]+i)/2;
    	}
    }
    
	//Chore 4:
    // get reference to checkboxes 
    var chore4 = document.getElementsByClassName('bath2');
    	
    // average values
    for (var i=1; i<=chore4.length; i++) {
        if (chore4[i].checked == true){
        	temp[3]=(initialRankings[3]+i)/2;
    	}
	}
	
	//Chore 5:
    // get reference to checkboxes 
    var chore5 = document.getElementsByClassName('kitchen1');
    	
    // average values
    for (var i=1; i<=chore5.length; i++) {
        if (chore5[i].checked == true){
        	temp[4]=(initialRankings[4]+i)/2;
    	}
    }
    	
    //Chore 6:
    // get reference to checkboxes 
    var chore6 = document.getElementsByClassName('kitchen2');
    	
    // average values
    for (var i=1; i<=chore6.length; i++) {
        if (chore6[i].checked == true){
        	temp[5]=(initialRankings[5]+i)/2;
    	}
	}
	
	//Chore 7:
    // get reference to checkboxes 
    var chore7 = document.getElementsByClassName('fridge');
    	
    // average values
    for (var i=1; i<=chore7.length; i++) {
        if (chore7[i].checked == true){
        	temp[6]=(initialRankings[6]+i)/2;
    	}
	}
	
	//Chore 8:
    // get reference to checkboxes 
    var chore8 = document.getElementsByClassName('common');
    	
    // average values
    for (var i=1; i<=chore8.length; i++) {
        if (chore8[i].checked == true){
        	temp[7]=(initialRankings[7]+i)/2;
    	}
    }
    
    //Chore 9:
    // get reference to checkboxes 
    var chore9 = document.getElementsByClassName('floors');
    	
    // average values
    for (var i=1; i<=chore9.length; i++) {
        if (chore9[i].checked == true){
        	temp[8]=(initialRankings[8]+i)/2;
    	}
    }
    
    alert ("Thank you for submitting your Rankings.");
	document.location.href = '../View/viewChores.html'
	
	return temp;
}
