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
 * Description: This file contains the algorithms that are used to assign chores. 
 * The file first reads in user input from the viewChores.html page. It stores the corresponding values 
 * from the buttons selected through an array implementation of a stack. 
 * Before the values are sorted and partitioned, another array is allocated to keep track of 
 * the chores that the values correspond to. The arrays are then passed to the quickSort() algorithm which sorts the array of values. 
 * The greedyPartition() algorithm then paritions the arrays into two sets with a minium difference between their sum of values. 
 * The corresponding chore names contained within each set is then printed onto the rankChores() page. 
 *
 * Last Modified: April 28, 2015
 *
 */

function assignChores(){
	
	var values = [];
	var maptoName = [];

	//Store values and names for each chore
	//If no ranking is selected for a chore, nothing is appended to the end of the array. 
	var chore1=$("input:radio[name='rank1']:checked")
	if (chore1.length > 0) {
		chore1Val = parseInt(chore1.val(), 10);
    		values.push(chore1Val);
    		maptoName.push(chore1.attr('class'));
	 }
    
	var chore2=$("input:radio[name='rank2']:checked")
	if (chore2.length > 0) {
		chore2Val = parseInt(chore2.val(), 10);
    		values.push(chore2Val);
   	    	maptoName.push(chore2.attr('class'));
	 }
    
	var chore3=$("input:radio[name='rank3']:checked")
	if (chore3.length > 0) {
		chore3Val = parseInt(chore3.val(), 10);
    		values.push(chore3Val);
   		maptoName.push(chore3.attr('class'));
	 }
        
    	var chore4=$("input:radio[name='rank4']:checked")
	if (chore4.length > 0) {
		chore4Val = parseInt(chore4.val(), 10);
    		values.push(chore4Val);
   		maptoName.push(chore4.attr('class'));
	 }
    
    	var chore5=$("input:radio[name='rank5']:checked")
	if (chore5.length > 0) {
		chore5Val = parseInt(chore5.val(), 10);
    		values.push(chore5Val);
   	  	maptoName.push(chore5.attr('class'));
	 }
    
	var chore6=$("input:radio[name='rank6']:checked")
 	if (chore6.length > 0) {
		chore6Val = parseInt(chore6.val(), 10);
    		values.push(chore6Val);
   		maptoName.push(chore6.attr('class'));
	}
        
	var chore7=$("input:radio[name='rank7']:checked")
	if (chore7.length > 0) {
		chore7Val = parseInt(chore7.val(), 10);
    		values.push(chore7Val);
   		maptoName.push(chore7.attr('class'));
	}
        
    	var chore8=$("input:radio[name='rank8']:checked")
	if (chore8.length > 0) {
		chore8Val = parseInt(chore8.val(), 10);
    		values.push(chore8Val);
   		maptoName.push(chore8.attr('class'));
	 }
        
    	var chore9=$("input:radio[name='rank9']:checked")
	if (chore9.length > 0) {
		chore9Val = parseInt(chore9.val(), 10);
    		values.push(chore9Val);
   		maptoName.push(chore9.attr('class'));
	 }
	 
	 //Call to the quickSort() function to sort both the arrays based on the values array
	 quickSort(values, maptoName, 0, values.length);
	 
	 //Call to the greedyParition() algorithm to parition both arrays into two sets
	 var split=greedyPartition(values, maptoName);
	 
	 //Prints onto rankChores.html page columns corresponding to each roommate and replaces commas between values with a line break
	 document.getElementById('roommate_1').innerHTML+=split[1].join("<br />");
	 document.getElementById('roommate_2').innerHTML+=split[3].join("<br />");
}

//Implements Quicksort algorithm on two arrays, but only the values in one array will be compared during the sort. 
//Sorts array based on the values in 'array'. Values in array2 will be sorted in the same order following the first array. 
function quickSort(array, array2, low, high) {
    if(high-1>low) {
  
        var pivot=low+Math.floor(Math.random()*(high-low));;

        pivot=qPartition(array, array2, low, high, pivot);

        quickSort(array, array2, low, pivot);
        quickSort(array, array2, pivot+1, high);
    }
}

function qPartition (array, array2, low, high, pivot) {
    var piv=array[pivot];
    array.swap(pivot, high-1);
    array2.swap(pivot, high-1);
    var temp=low;
    var ix;
    for(ix=low; ix<high-1; ++ix) {
        if(array[ix]<=piv) {
            array.swap(temp, ix);
            array2.swap(temp, ix);
            ++temp;
        }
    }
    array.swap(high-1, temp);
    array2.swap(high-1, temp);

    return temp;
}


Array.prototype.swap=function(a, b) {
    var tmp=this[a];
    this[a]=this[b];
    this[b]=tmp;
}

//Implements the a greedy partition algorithm on two arrays but only the values in one array will be compared during the sort. 
//Paritions array based on values in sortedArray. Values in sortedArray2 will be sorted in the same order following the first array. 
function greedyPartition(sortedArray, sortedArray2) {

	//Initialize two empty arrays (two sets) to store chores for each roommate
	var chores1 = [];
	var chores2 = [];
	
	var names1=[];
	var names2=[];
	
	//First value in the sorted array will be assigned to the first set
	chores1.push(sortedArray[0]);
	//Second value in the sorted array will be assigned to the second set
	chores2.push(sortedArray[1]);
	
	names1.push(sortedArray2[0]);
	names2.push(sortedArray2[1]);

	//Compares the values in each set. The next value from the sorted array will be added to the smaller of the two sets.
	if (chores1[0]>chores2[0]){
		chores2.push(sortedArray[2]) 
		names2.push(sortedArray2[2])
	}
	else {
		chores1.push(sortedArray[2]) 
		names1.push(sortedArray2[2])
	}
	
	//Compares the sum of the values in each set. The next value from the sorted array will be added to the set 
	//with the smaller sum
	for (var i = 3; i<sortedArray.length; i++) {
		
		var sum1 = 0; 
		for(var j = 0; j < chores1.length; j++) {
    			sum1+=chores1[j];
		}
	
		var sum2 = 0; 
		for(var k = 0; k < chores2.length; k++) {
    			sum2+=chores2[k];
		}
	
		if (sum1 > sum2) {
			chores2.push(sortedArray[i]) 
			names2.push(sortedArray2[i])
		}
			
		else {
			chores1.push(sortedArray[i]);
			names1.push(sortedArray2[i])
		}
	}
	
	return [chores1, names1, chores2, names2];
}
