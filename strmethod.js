//str length
var str="Susmita Sinha";
var a = str.length;
document.write(a);
document.write("<br>");

//tolower method
var str="Susmita Sinha";
var a = str.toLowerCase();
document.write(a);
document.write("<br>");

//toupper method
var str="Susmita Sinha";
var a = str.toUpperCase();
document.write(a);
document.write("<br>");

//includes (finding the  word)(return true or false)
var str="Susmita Sinha";
//var a = str.includes("Sinha");
var a = str.includes("sinha");
document.write(a);
document.write("<br>");

//starstwith method (finding the  word)(return true or false)
var str="Susmita Sinha";
//var a = str.startsWith("Susmita");
var a = str.startsWith("Sinha");
document.write(a);
document.write("<br>");

//endstwith method (finding the  word)(return true or false)
var str="Susmita Sinha";
//var a = str.endsWith("Sinha");
var a = str.endsWith("sinha");
document.write(a);
document.write("<br>");

//search method (finding the  index of the word)(return the right position and false index with -1)
var str="Susmita Sinha";
//var a = str.search("sinha");
var a = str.search("Sinha");
document.write(a);
document.write("<br>");

//match method (finding the matching word)(globally)
var str="Susmita Sinha";
var a = str.match(/S/g);
//var a = str.search("Sinha");
document.write(a);
document.write("<br>");

//indexof method
var str=" She is Susmita Sinha who is a Roadies";
var a = str.indexOf("is");// it accepted 1st 'is'
document.write(a);
document.write("<br>");

//lastindexof method
var str=" She is Susmita Sinha who is a Roadies";
var a = str.lastIndexOf("is");// it accepted las 'is'
document.write(a);
document.write("<br>");

//replace method
var str=" She is Susmita Sinha who is a Roadies";
//var a = str.replace("is" , "are");// it replaced 1st 'is'
//var a = str.replace(/is/g , "are");// it replaced global 'is'
document.write(a);
alert(str);
//document.write("<br>");

//trim method
//var str=" She is Susmita Sinha who is a Roadies";
var str =" Javascript";
var str = str.trim();
//var a = str.replace(/is/g , "are");// it replaced global 'is'
//document.write(a);
alert(str);
//document.write("<br>");
