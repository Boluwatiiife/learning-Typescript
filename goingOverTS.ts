function buyFood(request:{food:string,quantity:number,price:number,note?:string}){
    console.log(request.food);
    console.log(request.quantity);
    console.log(request.note);
    return request.price;
}
let myFood=buyFood({note:'i want it hot!',food:'rice and beans',quantity:3,price:1450});
console.log(myFood);

interface Laptop{
    model:string,
    color:string,
    processorSpeed:number,
    ramInGB:number,
    touchscreen:boolean,
    keyboardLightColor?:string
}
const boluLaptop:Laptop={
    model:'HP EliteBook',
    color:'silver',
    processorSpeed:2.76,
    ramInGB:8,
    touchscreen:true,
};
function laptopColor(randomPerson:Laptop|string):string{
    if(randomPerson===boluLaptop){
        return `the color of his laptop is ${boluLaptop.color} and i know you didn't ask but the ram size is ${boluLaptop.ramInGB}-GB, it's quite fast`
    }
    return 'i dont know who '+randomPerson+' is, sorry';
}
console.log(laptopColor(boluLaptop));
console.log(laptopColor('Muiz'));

//Interface.
interface student{
    namee:string,
    active:Active,
    dropOut:boolean,
};
interface Active{
    paidFees:boolean,
    levelPaidFor:Level
}
interface Level{
    level_100:string,
    level_200:string,
    level_500:string
}
let boluPortal:student={
    namee:'Tunde-lawal Boluwatife',
    active:{
        paidFees:true,
        levelPaidFor:{
            level_100:'',
            level_200:'',
            level_500:'YES'
        }
    },
    dropOut:false
};
console.log(boluPortal.active);

function studentt(something:string|number){
    if(typeof something==='string'){
        return `${something} is a random word`;
    }
    return `${something} is a number`
}
console.log(studentt('hub'));
console.log(studentt(25));

//Narrowing Example.
type stuff=string|number|boolean|Function
function randomExercise(param:stuff):any{
    if(typeof param==='string'){
        return `${param} is a stringg data type`;
    }else if(typeof param==='number'){
        return `i want ${param}-million dollars. ${param} is data type is number`;
    }else if(typeof param==='boolean'){
        if(param===true){
            return `${param} i was there when he started`;
        }else{
            return `${param} i don't know when he started`;
        }
    }else if(typeof param==='function'){
        return  param();
    }
}
console.log(randomExercise('Hashcode'));
console.log(randomExercise(70));
console.log(randomExercise(studentt('Opolo Hub')));
console.log(randomExercise(studentt(40)));
console.log(randomExercise(false));
console.log(randomExercise(true));

