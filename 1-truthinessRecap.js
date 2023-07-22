// Truthiness
// Falsy values in JavaScript are: false,0,'',null,undefined,Nan
// Truthy values in JavaScript are: everything else.
//Example.
var bolu = '';
if (!bolu) {
    var dara = !bolu;
    console.log('You are a boy');
}
;
var hungry = '';
if (!hungry) {
    //check if hungry(string)===''
    var notHungry = !hungry;
    //console.log('i am not hungry');
    console.log(notHungry);
}
else {
    console.log(hungry);
}
;
var randomStuff = 'let\'s fucking go!';
console.log(!randomStuff); //is randonStuff===''??
console.log(randomStuff);
console.log('>>>>>>>>>>>>>>>>');
var isOld = false;
console.log(!isOld);
if (!isOld) { //is isOld(false)===false?? 
    //const young=!isOld;
    console.log('You are old');
}
var age = 4;
if (!age) {
    console.log(!age);
    console.log('You do not have an age');
}
else if (age === 1) {
    console.log("You are ".concat(age, " year old."));
}
else {
    console.log("You are ".concat(age, " years old"));
}
;
function mentorship(x) {
    return x;
}
console.log(!mentorship(23)); //false => 23 is not ===0.
console.log(!mentorship(0)); //true => 0===0.
