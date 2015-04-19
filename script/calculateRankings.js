function averageRankings() {
	
	var initialRankings = [2, 3, 5, 3, 5, 4, 2, 1, 4];
	var temp=new Array(9);
	
	//Chore 1:
	// get reference to radio button value
	var chore1 = $('input[name=rank1]');
	var value1 = myRadio1.filter(':checked').val();
	//average values
        temp[0]=(initialRankings[0]+value1)/2;
    
	//Chore 2:
	// get reference to radio button value
	var chore2 = $('input[name=rank2]');
	var value2 = myRadio2.filter(':checked').val();
	//average values
        temp[1]=(initialRankings[1]+value2)/2;
    	
	//Chore 3:
    	// get reference to checkboxes 
	var chore3 = $('input[name=rank3]');
	var value3 = myRadio3.filter(':checked').val();
	//average values
        temp[2]=(initialRankings[2]+value3)/2;
    
	//Chore 4:
	// get reference to checkboxes 
 	var chore4 = $('input[name=rank4]');
	var value4 = myRadio4.filter(':checked').val();
	//average values
        temp[3]=(initialRankings[3]+value4)/2;
	
        //Chore 5:
        // get reference to checkboxes 
        var chore5 = $('input[name=rank5]');
        var value5 = myRadio5.filter(':checked').val();
        //average values
        temp[4]=(initialRankings[4]+value5)/2;
    	
        //Chore 6:
        // get reference to checkboxes 
        var chore6 = $('input[name=rank6]');
        var value6 = myRadio6.filter(':checked').val();
        //average values
        temp[5]=(initialRankings[5]+value6)/2;
	
        //Chore 7:
        // get reference to checkboxes 
        var chore7 = $('input[name=rank7]');
        var value7 = myRadio7.filter(':checked').val();
        //average values
        temp[6]=(initialRankings[6]+value7)/2;
	
        //Chore 8:
        // get reference to checkboxes 
     	var chore8 = $('input[name=rank8]');
	var value8 = myRadio8.filter(':checked').val();
	//average values
        temp[7]=(initialRankings[7]+value8)/2;
    
        //Chore 9:
        // get reference to checkboxes 
	var chore9 = $('input[name=rank9]');
	var value9 = myRadio9.filter(':checked').val();
	//average values
        temp[8]=(initialRankings[8]+value9)/2;
        
        alert ("Thank you for submitting your Rankings.");
	document.location.href = '../View/viewChores.html'
	
	return temp;
}
