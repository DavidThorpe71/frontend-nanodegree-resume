// var firstName = "David";

// var age = 33;

// console.log(firstName);

// var awesomeThoughts = "I am David Thorpe and I am AWESOME";

// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

var name = "David Thorpe";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var skills = 
// 	["awesomeness", "programming", "learning", "JS"];

// $("#main").append(skills);

// $("#main").append(skills[2]);

// $("#main").append(skills.length);

var bio = {
	"name": "David Thorpe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "07880878177",
		"email": "vegas_71@yahoo.co.uk",
		"github": "DavidThorpe71",
		"twitter": "@davisthorpe",
	},
	
	"welcomeMessage": "Hello, I am a budding web developer looking for work!",
	"skills": [
	"awesomeness", "programming", "learning", "JS"
	],
	"bioPic": "images/fry.jpg"
};


var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#main").append(bio.contacts);
  $("#main").append(bio.skills);
  $("#header").append(formattedbioPic);
  $("#header").append(formattedwelcomeMessage);