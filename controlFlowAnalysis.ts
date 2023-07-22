function padLeftt(padding:number|string,input:string){
    if(typeof padding==='number'){
        return 'cash '.repeat(padding)+input;
    }
    return padding+input;
}

console.log(padLeftt(5,'by God\' grace!'));
console.log(padLeftt('fuckk ','off!'))
/*padLeft returns from within its first if block. TypeScript was able to analyze this code and see that the rest of the body (return padding + input;) is unreachable in the case where padding is a number. As a result, it was able to remove number from the type of padding (narrowing from string | number to string) for the rest of the function.
 */
// this analysis of code based on reachability is called Control Flow Analysis.
console.log(padLeftt('Eight hundred Thousand ','by God\'s grace!'));

function anotherExample(){
    let stuff:string|number|boolean;

    stuff=Math.random()<0.5;
    console.log(stuff);
    if((Math.random()<0.5)){
        stuff='hello';
        console.log(stuff);
    }else{
        stuff=100;
        console.log(stuff);
    }
    return stuff;
}
console.log(anotherExample());