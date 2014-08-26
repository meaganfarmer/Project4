alert("JavaScript works!");
// string
//cd ~/Desktop/
//ls
//cs Project2

//global variables
	//var for phone number
var phoneNumber = "123-456-7891";
var areaCode = phoneNumber.substring(0,3);
var prefix = phoneNumber.substring(4,7);
var lastFour = phoneNumber.substring(8,12);
var finalNumber = areaCode + "-"+ prefix + "-" + lastFour;


//functions
var makePhoneNumber = function(areaCode, prefix, lastFour){
};

//function calls
console.log(finalNumber);