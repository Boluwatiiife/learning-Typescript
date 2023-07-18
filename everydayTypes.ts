// none of the lines of code will throw copilier errors
// cos i used 'any':it disables all/any type checking.
let obj:any={x:0};
//obj.foo();
obj.bar=100;
obj='hello'
const n:number=obj;

1.// Parameter type annotation
function greett(name:string){
    console.log('Hello, '+name.toUpperCase()+'!!');
}
console.log(greett('Boluwatife')); // if anything other than a string is passed as an argument, it shows error.

2.// return type Annotations
function getFavoriteNumber():number{
    return 12; //if anything other than a number is returned, it shows error. 
}
console.log(getFavoriteNumber());

3.// Anonymous Functions
const names=['Boluwatife','Liberty','Honour'];
names.forEach(function(s){
    console.log(s.toUpperCase());
});

names.forEach((s)=>{
    console.log(s.toUpperCase());
})  /*Contextual typing => Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.*/

4.// Object Types
function printCoord(pt:{x:number,y:boolean}){
    console.log('The coordinate\'s x value is '+pt.x);
    console.log('The coordinate\'s y value is '+pt.y);
}
console.log(printCoord({x:3,y:false}));// first argument=>number & second argument=>boolean.

5.// Optional Properties
function printName(obj:{first:string; last?:string }){
    //the '?' is to specify that the last object is optional.
}
printName({first:'Bob'});
printName({first:'Alice',last:'Alisson'});

6.// Union Types.
// TypeScript's type system allows you to build new types out of existing ones using a large variety of operators.
function printId(id:number|string){
    if(typeof id==='string'){
        //in this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else{
        //here, id is of type 'number'
        console.log(id);
    }
};
// another example
function welcomePeople(x:string[]|string){
    if(Array.isArray(x)){
        // the 'x' is an array of strings
        console.log('Hello, '+x.join(' and '))
    }
    else{
        // here 'x' is just 'string'
        console.log('Welcome lone traveler '+x);
    }
}
console.log(welcomePeople('life goes on'));

7.// Type Aliases.
// A type alias is a name for any type.
type Point={
    x: number,
    y: number
};
// you can use a type alias to give name to any type at all. not just object type.
// for example, a type alias can name a unoion type.
type Id=number|string;

8. //Interfaces.
//An interface declaration is another way to name an object type

9. //Type Assertions
// used to specify a more specific type.
const myCanvas=document.getElementById('main_canvas')as HTMLCanvasElement;
//like a type annotation, type assertions are removed by the compiler and wont't affect the runtime behavior of your code.

10.// Literal Types.
// in addition to the general types 'string' and 'number', we can refer to specific strings and number in type positions.
let changingString='Hello World';
changingString='Ola Mundo';
// because changingString canrep any possible string
const constantString='Hello World';
//Because 'constantString' can only rep 1 possible string, it has a literal type representation.
constantString;
