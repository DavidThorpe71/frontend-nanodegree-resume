// var firstName = "David";

// var age = 33;

// console.log(firstName);

// var awesomeThoughts = "I am David Thorpe and I am AWESOME";

// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

var name = "David Thorpe";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);