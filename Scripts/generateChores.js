/* This function assigns chores by reading in user input from the Chores Ranking page, sorting the input by its value
by calling the quickSort() function, and calling the greedyPartition() function to evenly distribute the chores. */

function assignChores(){
	
	var values = [];
	maptoName = [];

	var chore1=$("input:radio[name='rank1']:checked")
	if (chore1.length > 0) {
		chore1Val = parseInt(chore1.val(), 10);
    		values.push(chore1Val);
    		maptoName.push(chore1.name)
	 }
    
	var chore2=$("input:radio[name='rank2']:checked")
	if (chore2.length > 0) {
		chore2Val = parseInt(chore2.val(), 10);
    		values.push(chore2Val);
   	    	maptoName.push(chore2.name)
	 }
    
	var chore3=$("input:radio[name='rank3']:checked")
	if (chore3.length > 0) {
		chore3Val = parseInt(chore3.val(), 10);
    		values.push(chore3Val);
   		maptoName.push(chore3.name)
	 }
        
    var chore4=$("input:radio[name='rank4']:checked")
	if (chore4.length > 0) {
		chore4Val = parseInt(chore4.val(), 10);
    		values.push(chore4Val);
   		maptoName.push(chore4.name)
	 }
    
    var chore5=$("input:radio[name='rank5']:checked")
	if (chore5.length > 0) {
		chore5Val = parseInt(chore5.val(), 10);
    		values.push(chore5Val);
   	  	maptoName.push(chore5.name)
	 }
    
    var chore6=$("input:radio[name='rank6']:checked")
	if (chore6.length > 0) {
	chore6Val = parseInt(chore6.val(), 10);
    	values.push(chore6Val);
   	maptoName.push(chore6.name)
	  }
        
    var chore7=$("input:radio[name='rank7']:checked")
	if (chore7.length > 0) {
		chore7Val = parseInt(chore7.val(), 10);
    		values.push(chore7Val);
   	    maptoName.push(chore7.name)
	    }
        
    var chore8=$("input:radio[name='rank8']:checked")
	if (chore8.length > 0) {
		chore8Val = parseInt(chore8.val(), 10);
    		values.push(chore8Val);
   		maptoName.push(chore8.name)
	  }
        
    var chore9=$("input:radio[name='rank9']:checked")
	if (chore9.length > 0) {
		chore9Val = parseInt(chore9.val(), 10);
    		values.push(chore9Val);
   		maptoName.push(chore9.name)
	   }

	 alert ("Thank you for submitting your Rankings.");
	 document.location.href = '../View/viewChores.html'
	 quickSort(values, maptoName, 0, values.length);
	  var elem = document.getElementById('Roommate1');
	  elem.innerHTML = temp;
	  var elem2 = document.getElementById('Roommate2');
	  elem2.innerHTML = maptoName;
}



function quickSort(array, array2, low, high)
{
    if(high-1>low) {
        var pivot=low+Math.floor(Math.random()*(high-low));;

        pivot=qPartition(array, array2, low, high, pivot);

        quickSort(array, array2, low, pivot);
        quickSort(array, array2, pivot+1, high);
    }
}

function qPartition (array, array2, low, high, pivot)
{
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


Array.prototype.swap=function(a, b)
{
    var tmp=this[a];
    this[a]=this[b];
    this[b]=tmp;
}
