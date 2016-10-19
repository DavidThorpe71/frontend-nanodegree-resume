var work = {
    "jobs": [{
        "employer": "NHS Camden CCG",
        "title": "Senior Administrator",
        "location": "London, England",
        "dates": "2013-Current",
        "description": "Spreadsheet maintenance and creation, recording of all data for projects"
    }, {
        "employer": "The Audience Agency",
        "title": "Data-Entry Administrator",
        "location": "London, England",
        "dates": "2013",
        "description": "Data-entry"
    }, {
        "employer": "Self-Employed",
        "title": "Musician",
        "location": "Reading, England",
        "dates": "2005-2013",
        "description": "Musician in a band, release of two albums, touring throughout UK, Europe and USA."
    }]
};


var projects = {
    "projects": [{
        "title": "Reflections",
        "dates": "Sept.- Oct. 2016",
        "description": "A GitHub repository containing my reflections on the Introduction to Git and GitHub course",
        "image": "images/reflectss.jpg"
    }, {
        "title": "Japan Trip",
        "dates": "Aug. - Sept. 2016",
        "description": "A website with a few basic details regarding my trip to Japan, to enable me to practice responsive web design.",
        "image": "images/japanss.jpg"
    }, {
        "title": "Animal Trading Cards",
        "dates": "Aug. 2016",
        "description": "A project making a single animal trading card to meet the specifications set by the Udacity team",
        "image": "images/tradingss.jpg"
    }]
};


var bio = {
    "name": "David Thorpe",
    "role": "Web Developer",
    "welcomeMessage": "Hello, I am a budding web developer looking for work!",
    "bioPic": "images/profile.jpg",
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
    "schools": [{
        "name": "Bristol University of the West of England",
        "location": "Bristol, England",
        "dates": "2003-2004",
        "url": "www.uwe.ac.uk",
        "majors": ["English", "Film Studies"]
    }, {
        "name": "Maiden Erlegh School",
        "location": "Reading, England",
        "dates": "1996-2001",
        "url": "www.maidenerleghschool.co.uk",
        "majors": ["Maths", "English", "Sociology"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "Aug. 2016-Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe3"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "Aug. 2016",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "Sept. 2016",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    }]
};



top.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedEmail = HTMLemailLogo.replace("%data%", "zocial-yahoo");
    $("#footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitterLogo.replace("%data%", "zocial-twitter");
    $("#footerContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithubLogo.replace("%data%", "zocial-github");
    $("#footerContacts").append(formattedGithub);
};

top.display();


bio.display = function() {
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

bio.display();


work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();


projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", project.image);
        $(".project-entry:last").append(formattedImage);
    });
};

projects.display();


education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedName);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajors);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedURL);
    });
};

education.display();

$("#mapDiv").append(googleMap);
