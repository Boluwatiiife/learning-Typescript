/*Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. */

function indexOfString(haystack:string,needle:string){
    for(let i=0;i<haystack.length;i++){
        if(haystack.includes(needle)){
            return haystack.indexOf(needle);
        }
        else{
            return -1;
        }
    }
}
console.log(indexOfString('leetcode','leeto')); //returns -1
console.log(indexOfString('sadbutsad','sad')); //returns 0