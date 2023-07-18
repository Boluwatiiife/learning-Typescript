function lonelyInteger(xx:number[]){
    let notRepeated:number=0;

    for(let i=0;i<xx.length;i++){
        notRepeated^=xx[i];
    }
    return notRepeated;
}
console.log(lonelyInteger([1,2,3,4,3,2,1,4,5,5,45,45,7]))