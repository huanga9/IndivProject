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
 * Description: This file assigns chores by reading in user input from the Chores Ranking page, sorting the input by its value
 * by calling the quickSort() function, and calling the greedyPartition() function to evenly distribute the chores.
 * Last Modified: April 22, 2015
 *
 */
 var split=[];

function assignChores(){
	
	var values = [];
	var maptoName = [];

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
	 
	 quickSort(values, maptoName, 0, values.length);
	 
	 split=greedyPartition(values, maptoName);
}

function viewChores(){
	window.alert("Roommate 1's Chores: " + split[1] + "/n" + "Roommate 2's Chores: " + split[3]);
}



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

function greedyPartition(sortedArray, sortedArray2) {

	var chores1 = [];
	var chores2 = [];
	var names1=[];
	var names2=[];
	
	chores1.push(sortedArray[0]);
	chores2.push(sortedArray[1]);
	
	names1.push(sortedArray2[0]);
	names2.push(sortedArray2[1]);

	//Add an if statement to check if sortedArray.length>2
	if (chores1[0]>chores2[0]){
		chores2.push(sortedArray[2]) 
		names2.push(sortedArray2[2])
	}
	else {
		chores1.push(sortedArray[2]) 
		names1.push(sortedArray2[2])
	}
	
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
