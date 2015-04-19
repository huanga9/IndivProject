function averageRankings() {
	
	var initialRankings = [2, 3, 5, 3, 5, 4, 2, 1, 4];
	var temp=new Array(9);
	
	//Chore 1:
	// get reference to radio button value
	var chore1 = $('input[name=rank1]', '#difficultyLevels1');
	var checkedValue1 = chore1.filter(':checked').val();
	//average values
        temp[0]=(initialRankings[0]+checkedValue1)/2;
    
	//Chore 2:
	// get reference to radio button value
	var chore2 = $('input[name=rank2]');
	var checkedValue2 = rank2.filter(':checked').val();
	//average values
        temp[1]=(initialRankings[1]+value2)/2;
    	
	//Chore 3:
    	// get reference to checkboxes 
	var chore3 = $('input[name=rank3]');
	var checkedValue3 = rank3.filter(':checked').val();
	//average values
        temp[2]=(initialRankings[2]+value3)/2;
    
	//Chore 4:
	// get reference to checkboxes 
 	var chore4 = $('input[name=rank4]');
	var checkedValue4 = rank4.filter(':checked').val();
	//average values
        temp[3]=(initialRankings[3]+value4)/2;
	
        //Chore 5:
        // get reference to checkboxes 
        var chore5 = $('input[name=rank5]');
        var checkedValue5 = rank5.filter(':checked').val();
        //average values
        temp[4]=(initialRankings[4]+value5)/2;
    	
        //Chore 6:
        // get reference to checkboxes 
        var chore6 = $('input[name=rank6]');
        var checkedValue6 = rank6.filter(':checked').val();
        //average values
        temp[5]=(initialRankings[5]+value6)/2;
	
        //Chore 7:
        // get reference to checkboxes 
        var chore7 = $('input[name=rank7]');
        var checkedValue7 = rank7.filter(':checked').val();
        //average values
        temp[6]=(initialRankings[6]+value7)/2;
	
        //Chore 8:
        // get reference to checkboxes 
     	var chore8 = $('input[name=rank8]');
	var checkedValue8 = rank8.filter(':checked').val();
	//average values
        temp[7]=(initialRankings[7]+value8)/2;
    
        //Chore 9:
        // get reference to checkboxes 
	var chore9 = $('input[name=rank9]');
	var checkedValue9 = rank9.filter(':checked').val();
	//average values
        temp[8]=(initialRankings[8]+value9)/2;
        
        alert ("Thank you for submitting your Rankings.");
	document.location.href = '../View/viewChores.html'
	
	return temp;
}
