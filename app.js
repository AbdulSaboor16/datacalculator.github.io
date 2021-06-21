// JavaScript Document

var data = +prompt("Enter your date of brith");
var month = prompt("Enter your month of birth");
var year = +prompt("Enter your year of birth");
var DOB = new Date(data + " " + month + " " + year);
var today = new Date();
var Today = today.getTime();
var DB = DOB.getTime();
var totalYears = Today - DB;
document.getElementById("D");
document.write(Math.floor(totalYears/1000 / 60 / 60 / 24 / 365.25));