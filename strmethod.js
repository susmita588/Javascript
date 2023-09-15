//str length
var str = "Susmita Sinha";
var a = str.length;
document.write(a);
document.write("<br>");

//tolower method
var str = "Susmita Sinha";
var a = str.toLowerCase();
document.write(a);
document.write("<br>");

//toupper method
var str = "Susmita Sinha";
var a = str.toUpperCase();
document.write(a);
document.write("<br>");

//includes (finding the  word)(return true or false)
var str = "Susmita Sinha";
//var a = str.includes("Sinha");
var a = str.includes("sinha");
document.write(a);
document.write("<br>");

//starstwith method (finding the  word)(return true or false)
var str = "Susmita Sinha";
//var a = str.startsWith("Susmita");
var a = str.startsWith("Sinha");
document.write(a);
document.write("<br>");

//endstwith method (finding the  word)(return true or false)
var str = "Susmita Sinha";
//var a = str.endsWith("Sinha");
var a = str.endsWith("sinha");
document.write(a);
document.write("<br>");

//search method (finding the  index of the word)(return the right position and false index with -1)
var str = "Susmita Sinha";
//var a = str.search("sinha");
var a = str.search("Sinha");
document.write(a);
document.write("<br>");

//match method (finding the matching word)(globally)
var str = "Susmita Sinha";
var a = str.match(/S/g);
//var a = str.search("Sinha");
document.write(a);
document.write("<br>");

//indexof method
var str = " She is Susmita Sinha who is a Roadies";
var a = str.indexOf("is");// it accepted 1st 'is'
document.write(a);
document.write("<br>");

//lastindexof method
var str = " She is Susmita Sinha who is a Roadies";
var a = str.lastIndexOf("is");// it accepted las 'is'
document.write(a);
document.write("<br>");

//replace method
var str = " She is Susmita Sinha who is a Roadies";
//var a = str.replace("is" , "are");// it replaced 1st 'is'
//var a = str.replace(/is/g , "are");// it replaced global 'is'
document.write(a);
//alert(str);
//document.write("<br>");

//trim method
//var str=" She is Susmita Sinha who is a Roadies";
var str = " Javascript";
var str = str.trim();
//var a = str.replace(/is/g , "are");// it replaced global 'is'
//document.write(a);
//alert(str);
document.write("<br>");

//charat methods
var str = " She is Susmita Sinha who is a Roadies";
//var a = str.charAt(3);// it send the actual value of require index  and if it has a wrong index then return nothing 
//var a = str.charCodeAt(1);//  index er modhye value tar  ASCII value debe
//var a = String.fromCharCode(97);// ASCII value dite hobe tar value return korbe
document.write(a);
document.write("<br>");

//concat method
var str2 = "hello";
var str = " She is Susmita Sinha who is a Roadies";
var a = str.concat(str2);// it concat more than two strings
document.write(a);
document.write("<br> <br>");

//split method
var str2 = "hello";
var str = "She is Susmita Sinha who is a Roadies";
var a = str.split(" ");// it split from this position which position you want 
document.write(a);
document.write("<br> <br>");

//slice method
var str = "She is Susmita Sinha who is a Roadies";
var a = str.slice(5);// it slice from the given position like '3' total string
document.write(a);
document.write("<br><br>");

//substr method
var str = "She is Susmita Sinha who is a Roadies";
var a = str.substr(0,4);// it same as slice but in this method 1st index represent from what index we start and last index represent that add this from start index  
document.write(a);
document.write("<br><br>");

//substring method
var str = "She is Susmita Sinha who is a Roadies";
var a = str.substring(5,8); //it actually mention the actual index of the string not add   
document.write(a);
document.write("<br><br>");

//tostring method
var str = 50;
var a = str.toString(); //it change other datatypes into string  
//document.write(a + "50");//string a chage hoe gache 
document.write(str + 70);// integer type i ache 
document.write("<br><br>");

//tostring method
var str = "Hello World";
var a = str.valueOf(str); // value day
document.write(a);
document.write("<br><br>");