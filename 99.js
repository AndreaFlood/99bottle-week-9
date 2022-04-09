function song(){
	for(i=99;i>=1;i=i-1){
		console.log(i);
		document.getElementById("main").innerHTML+=("<br  />" + i +" bottles of beer on the wall " + i + " bottles of beer, you take one down pass it around " + (i-1) + " bottles of beer on the wall");
	}
		document.getElementById("main").innerHTML+="<br />" + "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall";
	
}