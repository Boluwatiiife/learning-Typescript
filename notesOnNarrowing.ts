function padLeft(padding:number|string,input:number){
    if(typeof padding==='number'){
        return ' '.repeat(padding)+input; //parameter 'padding' is a number
    }
    return padding+input; // parameter 'padding' is a string.
}

2.// Truthiness narrowing.
function printAll(strs:string|string[]|null){
    if(strs&&typeof strs==='object'){
        for(const s of strs){
            console.log(s);
        }
    }
    else if(typeof strs==='string'){
        console.log(strs);
    }
}//we've gotten rid of the error above by checking if 'strs' is truthy.
// this at least prevents us from dreaded errors when we run our code like: TypeError: null is not iterable.

function multiplyAll(
    values:number[]|undefined,
    factor:number
):number[]|undefined{
    if(!values){
        return values
    }else{
        return values.map((x)=>x*factor);
    }
}
console.log(multiplyAll([1,2,3],2))

3. //Equality narrowing.
// Typescript also uses switch statements and equality checks like '===','!==','==','!='to narrow types For example;
function example(x:string|number,y:string|boolean){
    if(x==y){
        // we can now call any'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }else{
        console.log(x);
        console.log(y);
        }
}
//another example
function printAlll(strs:string|string[]|null){
    if(strs!==null){
        if(typeof strs==='object'){
            for(const s of strs){
                console.log(s);
            }
        }else if(typeof strs==='string'){
            console.log(strs);
        }
    }
}
console.log(printAlll(null));
console.log(printAlll(['fuck','you']));
console.log(printAlll('hello'));

//>>>>
interface Container{
    value:number|null|undefined;
}
function multiplyValue(container:Container,factor:number){
    //remove both 'null' and 'undefined' from the type.
    if(container.value!=null){
        console.log(container.value);
        container.value*=factor;
    }
}
//console.log(multiplyValue(undefined,4))

4.// the in operator narrowing.
// used to determine if an object or its prototype chaim has a property with a name.
type Fish={swim:()=> void};
type Bird={fly:()=> void};

function move(animal:Fish|Bird){
    if('swim' in animal){
        return animal.swim();
    }
    return animal.fly();
}

5.// instanceof narrowing.
// to check whether or not a value is an 'instance' of another value.
function logValue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
} 
console.log(logValue('i will be wealthy!'));

6.// Assignment
// when we assign to any variable,Typescript looks at the right side of the assignment and narrows the left side appropriately.
let xx=Math.random()<0.5?10:'hello world!';
xx=1;
console.log(xx);
xx='goodbye';
console.log(xx);
xx=true;
console.log(xx);