alert("JavaScript works!");
// string
//cd ~/Desktop/
//ls
//cs Project2

//#1
//Does a string follow a 123-456-7890 pattern like a phone number?

var myString = "918-822-7535";

var areaCode = myString.substring(0, 3); {
    var myReturn = (areaCode) ;

var prefix = myString.substring(3, 7); {
   var theReturn = (prefix);

var lastFour = myString.substring(7,12); {
  var lastReturn = (lastFour);
  
var phoneNumber = myReturn + theReturn + lastReturn;

 console.log(phoneNumber);
}}};

var phone = ^?(/d{3})?[-\.]??(/d{3})?(\d{4})$/;

//boolean test of phone number
function patternTest(pattern){
    return phone.test(pattern){
        
    }
    console.log("phone number works");
}
else
    console.log("check phone number for error");
//var testingNumber = phoneNumber.test(pattern);
   // var results = testingNumber
  //  console.log(testingNumber)


//#2
//Does a string follow an aaa@bbb.ccc pattern like an email address?

var myEmail = "myemail@yahoo.com"
var body = myEmail.substring(0, at );{
    var myBody = (body)
    console.log(myBody);
}
var at = myEmail.indexOf("@");

//var pattern2 = ^\W@\W.\W$;
 //   var testingEmail = pattern2(myEmail) 
   // var emailResults = testingEmail
  //  console.log(emailResults)
//comment


//#3
//Is the string a URL? (Does it start with http: or https:?)


var urlString = "https://www.facebook.com"

if(urlString.indexOf("http:")>-1) {
    console.log("URL starts with http:")
}

if (urlString.indexOf("https:")> -1) {
    console.log("URL States with https:")
}

//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
//#9
var conversion = "42"
var convert = parseInt(conversion);
    console.log(convert)
//comment

//Array

//Find the smallest value in an array that is greater than a given number

//#10
var given = "28"
var given2 = parseInt(given)
var val = [3 , 60 ,80 ,25 ,40 ,30 ,12];
var x = Math.min(val > given);
console.log(x);

//comment


