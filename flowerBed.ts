/*You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise. */
function canPlaceFlower(flowerBed:number[],n:number){
    let countZero=0;
    let oneCount=0;

    flowerBed.forEach(element => {
        if(element===0){
            countZero=countZero+1;
        }else{
            oneCount=oneCount+1;
        }
    });
    if((countZero-n>oneCount)||(countZero-n===oneCount)){
        return true;
    }else{
        return false;
    }
}
console.log(canPlaceFlower([1,0,0,0,1],1));
console.log(canPlaceFlower([1,0,0,1,0,1,0,0,0],1));
console.log(canPlaceFlower([1,0,0,1,0,1,0,0,0],4));