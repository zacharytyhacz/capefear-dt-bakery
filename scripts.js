"use strict";
var dot0;
var dot1;
var dot2;
var dot3;
var currentSlide = 0;
var theslider;

function changeslider() {
currentSlide++;
 if(currentSlide == 1) {
  dot1select();
 }
	else if(currentSlide == 2) {
	 dot2select();
	}
	else if(currentSlide == 3) {
	 dot3select();
	}
	else if(currentSlide >= 4) {
	 dot0select();		
	}	
}
function dot0select() { // on click
	//window.alert("0");
	if(dot0.src.match("dotus")) { // if the dot is unselected
		dot0.src = "Images/dotis.png"; // change it to selected 
		theslider.style.backgroundImage = "url('Images/frontslider.jpg')";
		// make the other dots unselected
		if(dot1.src.match("dotis")) {
			dot1.src = "Images/dotus.png";
		}
		if(dot2.src.match("dotis")) {
			dot2.src = "Images/dotus.png";
		}
		if(dot3.src.match("dotis")) {
			dot3.src = "Images/dotus.png";
		}
	}	
}

function dot1select() {
	//window.alert("1");
	if(dot1.src.match("dotus")) { // if the dot is unselecte
		dot1.src = "Images/dotis.png"; // change it to selected 
		theslider.style.backgroundImage = "url('Images/frontslider1.jpg')";
		// make the other dots unselected
		if(dot0.src.match("dotis")) { // if it used to be selected 
			dot0.src = "Images/dotus.png"; // make it unselected 
		}
		if(dot2.src.match("dotis")) {
			dot2.src = "Images/dotus.png";
		}
		if(dot3.src.match("dotis")) {
			dot3.src = "Images/dotus.png";
		}
	}	
}

function dot2select()
{
	//window.alert("2");
	if(dot2.src.match("dotus")) { // if the dot is unselected
		dot2.src = "Images/dotis.png"; // change it to selected 
		theslider.style.backgroundImage = "url('Images/frontslider2.jpg')";
		// make the other dots unselected
		if(dot0.src.match("dotis")) {
			dot0.src = "Images/dotus.png";
		}
		if(dot1.src.match("dotis")) {
			dot1.src = "Images/dotus.png";
		}
		if(dot3.src.match("dotis")) {
			dot3.src = "Images/dotus.png";
		}
	}	
}

function dot3select() {
	//window.alert("3");
	if(dot3.src.match("dotus")) { // if the dot is unselected
		dot3.src = "Images/dotis.png"; // change it to selected 
		theslider.style.backgroundImage = "url('Images/frontslider3.jpg')";
		// make the other dots unselected
		if(dot0.src.match("dotis")) {
			dot0.src = "Images/dotus.png";
		}
		if(dot1.src.match("dotis")) {
			dot1.src = "Images/dotus.png";
		}
		if(dot2.src.match("dotis")) {
			dot2.src = "Images/dotus.png";
		}
	}
	currentSlide = 0; // have to reset it otherwise itll be dot3 over and over again
}

function initialize() {	
 dot0 = document.getElementById("dot0");
 dot1 = document.getElementById("dot1");
 dot2 = document.getElementById("dot2");
 dot3 = document.getElementById("dot3");
	
 theslider = document.getElementById("slider");
 dot0select();
 setInterval(changeslider, 7000);
}
window.onload = initialize;