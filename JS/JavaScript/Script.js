function display(){
    let n=document.getElementById("name").value;
    document.getElementById("output").innerHTML="HELLO, " + n  + " WELCOME TO MY WEBSITE!";
}

let ar1=[];
var s=0;
function ADD(){
    let a=document.getElementById("arr").value;
    ar1.push(Number(a));
    document.getElementById("arr").value='';
    document.getElementById("arrdisp").innerHTML=" ELEMENT '"+ a +"' ADDED INTO ARRAY SUCCESSFULLY";
    
}

function DISPLAY_ARRAY(){
    document.getElementById("arrdisp").innerHTML="ARRAY ELEMENTS ARE: <b>"+ar1;
}

function SUM(){
    for(let i=0;i<ar1.length;i++){
        s=s + ar1[i];
    }
    document.getElementById("arrdisp").innerHTML="ARRAY ELEMENTS ARE: <br>"+ar1;
    document.getElementById("sumdisp").innerHTML="SUM OF THE ARRAY : <br>"+ s;

}