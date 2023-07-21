// code to reverse integers.

function reverseThisNum(numm){
    let myFunc=num=>Number(num);
    let arrrNumm=Array.from(String(numm),myFunc);
    let reversedArr=[];
    
    for(let j=arrrNumm.length-1;j>=0;j--){
        reversedArr.push(arrrNumm[j]);
    }
    let final=reversedArr.reduce((accum,reversedArr)=>(accum*10)+reversedArr,0);
    return final;
    
};
console.log(reverseThisNum(123));
console.log(reverseThisNum(120));
console.log(reverseThisNum(321))

