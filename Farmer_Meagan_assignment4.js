alert("JavaScript works!");
// string
//cd ~/Desktop/
//ls
//cs Project2

//global variables
	//var for phone number
var phoneNumber = "123-456-7891";
	//var for email
var myEmail = "cakewalk@gmail.com";




//functions
//function for phone number
var makePhoneNumber = function(areaCode, hyphen, prefix, hyphen, lastFour){
var areaCode = phoneNumber.substring(0,3);
var prefix = phoneNumber.substring(4,7);
var lastFour = phoneNumber.substring(8,12);
var finalNumber = areaCode + "-"+ prefix + "-" + lastFour;
	if (finalNumber === phoneNumber )
		console.log("awesome");
//} else {
		console.log("Poo");
};

//function for email
var makeEmail = function(username, at, provider, domain){
	var usernameStop = makeEmail
	var username = myEmail.substring(0,usernamestop)
};



//function calls
//need function call for phone number... I have no idea what!!!!
//function call for email