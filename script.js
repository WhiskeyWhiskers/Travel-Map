var footer = document.getElementById("foot01");

if (footer !== null){

document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " Stephen Akerson. All rights reserved.</p>";

}

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='countries.html'>Countries</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"</ul>";

var images = {
	base: "images/",
	yosemite:{
		base: "yosemite/",
		pics: ["snow_bros.JPG", "stephen_mustache.JPG", "tim_snowpack.JPG"]
	},
	tahoe:{
	    base: "tahoe/",
	    pics: ["tahoe_cove.JPG"]
	}
};

var yosemiteImgIndex = 0;

function destination(location){
	return document.getElementById(location);
}

function baseImageUrl(destination){
	return images.base + images[destination].base;
}

function imgSetter(location, imgIndex){
    domElement = destination(location);
    domElement.src = baseImageUrl(location) + images[location].pics[imgIndex];
}

function imgChanger(){ 
	yosemiteImgIndex++;
	if (yosemiteImgIndex % images.yosemite.pics.length === 0){
		yosemiteImgIndex = 0;
	}
	imgSetter('yosemite', yosemiteImgIndex);
}

imgSetter('yosemite', yosemiteImgIndex);

document.getElementById("yosemite").addEventListener('click', imgChanger);
document.getElementById("yosemiteBlog").onclick = function () {
        location.href = "yosemite.html";
    };
