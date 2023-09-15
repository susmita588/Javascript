//now() todatestring()//date month week year 
var now = new Date();
document.write(now.toDateString());
document.write("<br> <br>");

//getdate()//only date shows
var now = new Date();
document.write(now.getDate());
document.write("<br> <br>");

//getyear()//only year shows
var now = new Date();
document.write(now.getFullYear());
document.write("<br> <br>");

//getmonth()//only month shows
var now = new Date();
document.write(now.getMonth()); 
document.write("<br> <br>");

//gethours()//only hour shows
var now = new Date();
document.write(now.getHours()); 
document.write("<br> <br>");

//getmintues()//only minitues shows
var now = new Date();
document.write(now.getMinutes()); 
document.write("<br> <br>");

//getseconds()//only seconds shows
var now = new Date();
document.write(now.getSeconds()); 
document.write("<br> <br>");

//getmiliseconds()//only miliseconds shows
var now = new Date();
document.write(now.getMilliseconds()); 
document.write("<br> <br>");
//set()[set all things]
var now = new Date();
now.setDate(2);
now.setFullYear(2024);
now.setMonth(12);
now.setHours(4);
now.setMinutes(60);
now.setSeconds(34);
now.setMilliseconds(5);
document.write(now); 
document.write("<br> <br>");