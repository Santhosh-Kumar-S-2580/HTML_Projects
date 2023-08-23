//sINGLE LINE COMMENT
/* MULTILINE COMMENT */
// console.log('hello ') 
// alert('ALERT 3 !')

show("< PLEASE ENTER YOUR NAME HERE ...>,   ");

function ask(q){
var a = prompt(q);
show(a);
}

function show(a){
    document.getElementById("input").innerHTML="HELLO, " + a  + " WELCOME TO MY WEBSITE!";
  window.document.getElementById("input").setAttribute('style', 'border:2px solid red; background:yellow');
}