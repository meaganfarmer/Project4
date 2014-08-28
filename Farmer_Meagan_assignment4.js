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
	//var for URL
var url = "https://www.livefree.com"
	


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
var email = "myEmail@yahoo.com"

//function for email
var makeEmail = function(username, at, provider, domain){
	var testForAt = email.indexof("@");
	var testForDot = email.indexOf(".");
	return testForAt && testForDot;
	if (testForAt && testForDot == -1)
		console.log("Email appears valid")
		
};

//Function for URL
var testURL = function (protocol, colon, server, domain) {
var protocol = (https || https)
	if(url.indexof("http")>-1) {
		console.log("URl is HTTP:");
	if(url.indexOf("https")>-1) {
	
		console.log("URL is HTTPS:")
		
	}}};

//function calls
//need function call for phone number... I have no idea what!!!!
//function call for email