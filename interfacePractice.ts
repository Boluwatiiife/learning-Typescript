interface guys{
    fullNamee:string,
    age:number,
    phoneType:string,
    girlfriend:boolean,
    department:string,
    favoriteCar?:string
};

let Boluwatife:guys={
    fullNamee:'Tunde-lawal Boluwatife John',
    age:23,
    phoneType:'Tecno Camon 12pro',
    department:'Computer Engineering',
    favoriteCar:'Beamer',
    girlfriend:true
};
let Samuel:guys={
    fullNamee:'Momoh Eromoshele Samuel',
    age:23,
    phoneType:'Iphone x',
    girlfriend:false,
    department:'Elect Elect'
};
let Muiz:guys={
    fullNamee:'Adesina Muiz Olamide',
    age:22,
    phoneType:'Iphone 6s',
    department:'Computer Sci w Econs',
    girlfriend:true,
    favoriteCar:'Benz'
}
function returnPhone(x:string){
    if(x==='Muiz'){
        return `${x} uses ${Muiz.phoneType}`;
    }else if(x==='LaWhizzi'){
        return `${x} uses ${Boluwatife.phoneType}`;
    }else if(x==='Marcelo'){
        return `${x} uses ${Samuel.phoneType}`;
    }else{
        return `i don't know who this is.`
    }
};
console.log(returnPhone('Marcelo'));
console.log(returnPhone('LaWhizzi'));
console.log(returnPhone('dara'));

interface random{
    bodyCount:number,
    eyeColor:string,
    person:guys
}
let randomGuy:random={
    bodyCount:2,
    eyeColor:'brown',
    person:Boluwatife,
}
console.log(randomGuy.bodyCount);
console.log(randomGuy.person);

let xx1:number|string;
let xx2:guys|random;

xx2=Muiz;
console.log(xx2.fullNamee);

