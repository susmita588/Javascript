var a =[1,3,5];
/*var ary=[
    { f: "Ram", l:"tam"},
    { f: "Rer", l:"poi"},
    { f: "wer", l:"nhj"},
];*/
var b = a.map(test);
document.write(b);
function test(x){
    return x * 10;
}
/*var b = ary.map(test);
document.write(b);
function test(x){
    return x.f + " "+ x.l;
}*/