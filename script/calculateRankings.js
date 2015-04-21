function averageRankings() {
	
	var values = [9];
	
	//Gets reference to radio button values, converts the strings to integer values, and averages the values with 
	//pre-computed values
	var chore1=$("input:radio[name='rank1']:checked").val()
	chore1Val = parseInt(chore1, 10);
        values[0] = new Array (chore1Val, "Chore1" );
    
	var chore2=$("input:radio[name='rank2']:checked").val()
	chore2Val = parseInt(chore2, 10);
        values[1] = new Array (chore2Val, "Chore2" );
    
	var chore3=$("input:radio[name='rank3']:checked").val()
	chore3Val = parseInt(chore3, 10);
        values[2] = new Array (chore3Val, "Chore3" );
        
        var chore4=$("input:radio[name='rank4']:checked").val()
	chore4Val = parseInt(chore4, 10);
        values[3] = new Array (chore4Val, "Chore4"  );
    
    	var chore5=$("input:radio[name='rank5']:checked").val()
	chore5Val = parseInt(chore5, 10);
        values[4] = new Array (chore5Val, "Chore5" );
    
    	var chore6=$("input:radio[name='rank6']:checked").val()
	chore6Val = parseInt(chore6, 10);
        values[5] = new Array (chore6Val, "Chore6" );
        
        var chore7=$("input:radio[name='rank7']:checked").val()
	chore7Val = parseInt(chore7, 10);
        values[6] = new Array (chore7Val, "Chore7" );
        
        var chore8=$("input:radio[name='rank8']:checked").val()
	chore8Val = parseInt(chore8, 10);
        values[7] = new Array (chore8Val, "Chore8" );
        
        var chore9=$("input:radio[name='rank9']:checked").val()
	chore9Val = parseInt(chore9, 10);
        values[8] = new Array (chore9Val, "Chore9" );

        alert ("Thank you for submitting your Rankings.");
	document.location.href = '../View/viewChores.html'
	
	var temp = quickSort(values, 0, values.length-1);
	
	document.write("'Roommate1:' + greedyPartition(chores1) +  'Roommate 2:' + greedyPartition(chores2)");
}

//Sorts array based on numeric values

function quickSort (array, lo, hi) {

  var low  = lo;
  var high = hi;
  mid = Math.floor((low+high)/2);

  do {
    while (compare(array, low,  mid) > 0)
      low++;

    while (compare(array, high, mid) < 0)
      high--;

    if (low <= high) {
      swap( array, low, high );
      low++;
      high--;
    }

  } while (low <= high);

  if (high > lo)
    qsort( array, lo, high );

  if (low < hi)
    qsort( array, low, hi );

}

function compare (array, left, right) {

    var depth = 0;

    while (depth < array[left].length && depth < array[right].length) {

	if (array[left][depth] < array[right][depth])
	    return 1;
	else if (array[left][depth] > array[right][depth])
	    return -1;
	
	depth++;	    
    }
    return 0;
}

function swap (a, i, j) {

  var tmp = a[i]; 
  a[i] = a[j];
  a[j] = tmp;

}

function greedyPartition(sortedArray){

	var chores1 = [];
	var chores2 = [];
	
	chores1.push(sortedArray[0]);
	chores2.push(sortedArray[1]);

	//Add an if statement to check if sortedArray.length>2
	if (chores1[0]>chores2[0]){
		chores2.push(sortedArray[2]) }
	
	else {
		chores1.push(sortedArray[2]) }
	
	for (var i = 2; i<sortedArray.length; i++) {
		
	
		var sum1 = 0; 
		for(var j = 0; j < chores1.length; j++) {
    			sum1 = sum1 + chores1[j];
		}
	
		var sum2 = 0; 
		for(var k = 0; k < chores2.length; k++) {
    			sum2 = sum2 + chores2[k];
		}
	
		if (sum1 > sum2) {
			chores2.push(sortedArray[i]) }
			
		else {
			chores1.push(sortedArray[i]);
		}
	}
	
	return chores2;
}
