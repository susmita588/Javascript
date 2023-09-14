//normal array declairation
var a = ["Ram", "Aman", "Raju", "Karan"];
document.write(a + "<br>");
//sort Method
a.sort();
document.write(a + "<br>");
//reverse Method
a.reverse();
document.write(a + "<br>");
//pop method
a.pop();
document.write(a + "<br>");
//push method(using data) add data in last
a.push("Susmita");
document.write(a + "<br>");
//pop method(using data)// delete data on last
a.pop("Susmita");
document.write(a + "<br>");
//shift method opposite of pop delete data on first
a.shift();
document.write(a + "<br>");
//unshift method opposite of push add data in first
a.unshift("Susmita");
document.write(a + "<br>");
//concat  1st method
var a = ["Ram", "Aman", "Raju", "Susmita"];
var b = a.concat("Rahul", "Karan");
document.write(b);
document.write("<br>");
//concat 2nd method
/*var a=["Ram","Aman","Raju","Susmita"];
var b= ["Rahul","Karan"];
var c=a.concat(b);// here we concat multiple array
document.write(c);*/
document.write("<br>");
//join method
var a = ["Ram", "Aman", "Raju", "Susmita"];
var b = ["Rahul", "Karan"];
var c = a.concat(b);
var d = c.join("<br>");
document.write(d);
document.write("<br> <br>");
//slice method [slice(start value,end value)]
var a = ["Ram", "Aman", "Raju", "Susmita"];
//var f= a.slice(1,3);//joto ta obdhi neoar dorkar tar the ak ghor besi nite hobe
//document.write(f +"<br>");
//document.write("<br>");
var f = a.slice(-2);//'-' count hoy last thek
document.write("<br>");
document.write(f + "<br>");

//splice method [splice(index,how many delete,"new value")]
var a = ["Ram", "Aman", "Raju", "Susmita"];
//a.splice(3,0,"Neha","Soumita");
a.splice(1, 2);//deletion ta j index the start korechi tar por thek joto gulo
//delete korbo seta bojhabe jamon akhane 1 index er por thek 2 to delete hobe  
document.write(a + "<br> <br>");
//isarray method ( array ki na detect kore)
//var a=["Ram","Aman","Raju","Susmita"];
var a = "tatai";
if (Array.isArray(a)) {
    document.write("This is an array");
}
else {
    document.write("This is not an array");
}
document.write(a + "<br> <br>");
//index of[ "searchitem",start] 

var a = ["Ram", "Aman", "Raju", "Aman"];
var b = a.indexOf("Aman", 2);
document.write(b + "<br> <br>");

// lastindex of[ "searchitem",start] last thek ata search korbe index of a 1st thek search kora hoy
var a = ["Ram", "Aman", "Raju", "Aman"];
//var c=a.lastIndexOf("Aman",2);
var c = a.lastIndexOf("Afdgf", 2);// kono word khuje na pele -1 return kore
document.write(c + "<br>");

//includes method[case sensitive.includes("search item")]
var a = ["Ram", "Aman", "Raju", "Aman"];
var b = a.includes("Aman");
document.write(b + "<br> <br>");

// some method [checks if any of the elements in an array pass the test]
var ages = [10, 2, 18, 15];
document.write(ages + "<br><br>");
//some method use korar jonno function nite hoy, some method a kinchu akta true hole true dekhiye debe but every te sob kota check kore condition true ache ki na 
var b = ages.some(checkadult);
document.write(b + "<br><br>");
// every method
var b = ages.every(checkadult);
document.write(b + "<br><br>");
//function call hoeche
function checkadult(age) {
    return age >= 18;
}

//find()[this method returns value of the first element in an array that pass the test, ata jokhon akbar true value peye jay sei value tak return koriye day tar pore kono true value thakleo seta k return kore na ]
var ages = [10, 2, 18, 15];
document.write(ages + "<br><br>");

var b = ages.find(checkadult);
document.write(b + "<br><br>");

function checkadult(age) {
    return age >= 18;
}

//findindex()[this method returns index of the first element in an array that pass the test , ata jokhon akbar true value index peye jay sei value index tak return koriye day tar pore kono true value thakleo seta k return kore na ]
var ages = [10, 2, 18, 15];
document.write(ages + "<br><br>");

var b = ages.findIndex(checkadult);
document.write(b + "<br><br>");

function checkadult(age) {
    return age >= 18;
}

//filter method [this method creates an array filled with all array elements that pass a test]
var ages = [10, 20, 18, 15];
document.write(ages + "<br><br>");

var b = ages.filter(checkadult);
document.write(b + "<br><br>");

function checkadult(age) {
    return age >= 18;
}
//tostring method [The tostring()method converts array into string and returns the result, ai method ta apply er por jehetu array string hoe jay tar jonno astring er  opor kono array r methods kaj korbe na ]
var s = ["Ram", "Sam", "Jodu"];
s.toString();
document.write(s);
document.write("<br>");


// valueof method [This method returns the array]
var s = ["Ram", "Sam", "Jodu"];
document.write(s.valueof());


//fill method[This method fills all the elements ain an array with static value]
var s = ["Ram", "Sam", "Jodu"];
s.fill("Ram");
document.write(s);


//foreach loop[ ata puro array ta dekhabe,protyek value r jonno run hobe]
var o = ["Ram", "Sam", "Jodu", "Madhu"];
o.forEach(function (value) {
    document.write(value + "<br>");
});

