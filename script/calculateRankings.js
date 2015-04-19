function averageRankings() {
	
	var initialRankings = [2, 3, 5, 3, 5, 4, 2, 1, 4];
	var temp=new Array(9);
	
	//Gets reference to radio button values, converts the strings to integer values, and averages the values with 
	//pre-computed values
	var chore1=$("input:radio[name='rank1']:checked").val()
	chore1Val = parseInt(chore1, 10);
        temp[0]=(initialRankings[0]+chore1Val)/2;
    
	var chore2=$("input:radio[name='rank2']:checked").val()
	chore2Val = parseInt(chore2, 10);
        temp[1]=(initialRankings[1]+chore2Val)/2;
    
	var chore3=$("input:radio[name='rank3']:checked").val()
	chore3Val = parseInt(chore3, 10);
        temp[2]=(initialRankings[2]+chore3Val)/2;
        
        var chore4=$("input:radio[name='rank4']:checked").val()
	chore4Val = parseInt(chore4, 10);
        temp[3]=(initialRankings[3]+chore4Val)/2;
    
    	var chore5=$("input:radio[name='rank5']:checked").val()
	chore5Val = parseInt(chore5, 10);
        temp[4]=(initialRankings[4]+chore5Val)/2;
    
    	var chore6=$("input:radio[name='rank6']:checked").val()
	chore6Val = parseInt(chore6, 10);
        temp[5]=(initialRankings[5]+chore6Val)/2;
        
        var chore7=$("input:radio[name='rank7']:checked").val()
	chore7Val = parseInt(chore7, 10);
        temp[6]=(initialRankings[6]+chore7Val)/2;
        
        var chore8=$("input:radio[name='rank8']:checked").val()
	chore8Val = parseInt(chore8, 10);
        temp[7]=(initialRankings[7]+chore8Val)/2;
        
        var chore9=$("input:radio[name='rank9']:checked").val()
	chore9Val = parseInt(chore9, 10);
        temp[8]=(initialRankings[8]+chore9Val)/2;

        alert ("Thank you for submitting your Rankings.");
	document.location.href = '../View/viewChores.html'
	
	return temp;
}
