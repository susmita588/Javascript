var a ={
    fname : 'Ram',
    lname : 'Saha',
    age : '25',
    email : 'Sis@jhkjnjk',
    favm : ["Consuring",'Pathan','Sholey'],
    salary : function(){
        return 25000;
    },
    fullname : function(){
        //thisw key word access the owner of object a and fname and lname all others are their properties 
         return this.fname +" "+ this.lname
    },
    living :
    {
        'city':'Kolkata',
        'state':'West Bengal',
    }

}
//second method of making object
var b = new Object();
b.fname = 'Susmita';
b.lname =  'Sinha';
document.write("<br>");
document.write(b.fname);
document.write(b['lname']);




/*console.log(a);
document.write(a.fname);
document.write("<br>");
document.write(a.favm[0]);
document.write("<br>");
document.write(a.salary());
document.write("<br>");
document.write(a.fullname());
document.write("<br>");
document.write(a.living.city);
document.write("<br>");*/
