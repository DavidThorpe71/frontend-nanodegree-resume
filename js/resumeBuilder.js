var work = {
	"jobs": [
		{
		"employer": "NHS Camden CCG",
		"title": "Senior Administrator",
		"location": "London",
		"dates": "2013-Current",
		"description": "Spreadsheet maintenance and creation, recording of all data for projects"
		},
		{
		"employer": "The Audience Agency",
		"title": "Data-Entry Administrator",
		"location": "London",
		"dates": "2013",
		"description": "Data-entry"
		},
		{
		"employer": "Self-Employed",
		"title": "Musician",
		"location": "Reading/London",
		"dates": "2005-2013",
		"description": "Musician in a band, release of two albums, touring throughout UK, Europe and USA."}
	]
};


var projects = {
	"projects": [
		{
		"title": "Reflections",
		"dates": "Sept.- Oct. 2016",
		"description": "A GitHub repository containing my reflections on the Introduction to Git and GitHub course",
		"images": ["images/reflectss.jpg"]
		},
		{
		"title": "Japan Trip",
		"dates": "Aug. - Sept. 2016",
		"description": "A website with a few basic details regarding my trip to Japan, to enable me to practice responsive web design.",
		"images": ["images/japanss.jpg"]
		},
		{
		"title": "Animal Trading Cards",
		"dates": "Aug. 2016",
		"description": "A project making a single animal trading card to meet the specifications set by the Udacity team",
		"images": ["images/tradingss.jpg"]}
	]
};


var bio = {
	"name": "David Thorpe",
	"role": "Web Developer",
	"welcomeMessage": "Hello, I am a budding web developer looking for work!",
	"bioPic": "images/fry.jpg",
	"contacts": {
		"mobile": "07880878177",
		"email": "vegas_71@yahoo.co.uk",
		"github": "DavidThorpe71",
		"twitter": "@davisthorpe",
		"location": "London"
		},
	"skills": ["HTML", "CSS", "JS", "Excel"]
};


var education = {
	"schools": [
		{
		"name": "Bristol University of the West of England",
		"location": "Bristol",
		"degree dates": "2003-2004",
		"url": "www.uwe.ac.uk",
		"majors": ["English", "Film Studies"]
		},
		{
		"name": "Maiden Erlegh School",
		"location": "Reading",
		"degree dates": "1996-2001",
		"url": "www.maidenerleghschool.co.uk",
		"majors": ["Maths", "English", "Sociology"]
		}
	],
	"onlineCourses": [
		{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "Aug. 2016-Present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe3"
		},
		{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": "Aug. 2016",
		"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": "Sept. 2016",
		"url": "https://www.udacity.com/course/responsive-images--ud882"}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

if(bio.skills != 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};