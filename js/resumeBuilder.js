var name = "David Thorpe";

var role = "Web Developer";

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


var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);


var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile)
$("#topContacts").append(formattedmobile);
var formattedemail = HTMLemail.replace("%data%",bio.contacts.email)
$("#topContacts").append(formattedemail);
var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github)
$("#topContacts").append(formattedgithub);
var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter)
$("#topContacts").append(formattedtwitter);


$("#header").append(HTMLskillsStart);
var formattedskills = HTMLskills.replace("%data%", bio.skills[0])
$("#header").append(formattedskills);
var formattedskills = HTMLskills.replace("%data%", bio.skills[1])
$("#header").append(formattedskills);
var formattedskills = HTMLskills.replace("%data%", bio.skills[2])
$("#header").append(formattedskills);
var formattedskills = HTMLskills.replace("%data%", bio.skills[3])
$("#header").append(formattedskills);


var work = {};

work.title = "Senior Administrator";
work.employer = "NHS Camden CCG";
work.dates = "2013-Current";
work.location = "London";

var education = {
	"schools": [
		{
		"name": "Maiden Erlegh School",
		"city": "London",
		"level": "A-Level",
		"courses": ["Maths", "English", "Sociology"]
		}
	]
};

education["name"] = "Maiden Erlegh School";
education["yearsattended"] = "1996-2001";
education["city"] = "Reading";


$("#workExperience").append(HTMLworkStart);
var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
$("#workExperience").append(formattedTitle);

$("#education").append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%", education["name"]);
$("#education").append(formattedName);
// $("#education").append(education.name);