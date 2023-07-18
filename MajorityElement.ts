function majorityElement(nums:number[]){
    let mostfreq=1;
let mmm=0;
let theElement;

for(let i=0;i<nums.length;i++){
    for(let j=i;j<nums.length;j++){
        if(nums[i]===nums[j]){
            mmm=mmm+1;
        }
        if(mostfreq<mmm){
            mostfreq=mmm;
            theElement=nums[i];
        }
    }
}
return theElement;
}

console.log(majorityElement([2,2,1,1,1,2,2,2]))