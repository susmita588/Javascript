//number() convert any datatypes into number
var a ="99";
//var num= Number(a);
//document.write(num + 10); // number value 
//document.write(a + 10);// string value 
document.write("<br>");


//parseInt() it returns without decimal Intvalue , first integer value return, if it takes false value then it returns Nan
//var a ="99.45";
var a =" Susmita Sinha 23";
var num= parseInt(a);
document.write(num); 
document.write("<br>");

//parsefloat() it returns float value but there is no float value and has a space then it returns integer value
//var a ="99.45";
var a ="99   45";
var num= parseFloat(a);
document.write(num); 
document.write("<br>");


//parsefloat() it returns float value but there is no float value and has a space then it returns integer value
//var a ="99.45";
var a ="99   45";
var num= parseFloat(a);
document.write(num); 
document.write("<br>");

//isinteger() it checkes intiger value just like 
//var a ="Hello";// not finite
var a =99;
//var a = Infinity;
var num= Number.isInteger(a);
document.write(num); 
document.write("<br>");

//to fixed() it fixes the number after decimal points 
var a =99.45678995;
var num= a.toFixed(3);
document.write(num); 
document.write("<br>");

//toprecision() it returns tound of value
var a =99.45678995;
var num= a.toPrecision(3);
document.write(num); 
document.write("<br>");