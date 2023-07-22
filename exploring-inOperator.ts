type University={
    name:string,
    level:number,
    smart:boolean
}

type Secondary={
    name:string,
    age:number,
    class:string,
    smart:boolean,
    ownLaptop:boolean
}

let boluwatife:University={
    name:'Tunde-lawal Boluwatife John',
    level:500,
    smart:true
}

let fisayo:Secondary={
    name:'Tunde-lawal Oluwafisayomi',
    age:15,
    class:'SS3A',
    smart:true,
    ownLaptop:true
}

function student(saidStudent:University|Secondary){
    if('level'in saidStudent){// narrowing down to university.
        return `this student is in ${saidStudent.level} level`;
    }
    return saidStudent.class;
};
console.log(student(boluwatife));

//instanceof operator.
class FootballClub{
    name;
    FirstDivision;
    constructor(name:string,FirstDivision:boolean){
        this.name=name;
        this.FirstDivision=FirstDivision;
    }
    hasRefs():void|any{
        return 'Yeah, we have refrees';
    }
}
class EnglishClubs extends FootballClub{
    hasRefs(): void|string{
        return `Our refs speak very good English`;
    }
    goodLeague():void|string{
        return 'Our League is the best itw';
    }
}
const myClub=new EnglishClubs('Liverpool FC',true)
console.log(myClub.name);
console.log(myClub.hasRefs());
console.log(`${myClub.FirstDivision}, we play in the First Division`);

const clubOutsideUK=new FootballClub('Real Madrid',true);
console.log(clubOutsideUK.hasRefs());
console.log(clubOutsideUK.FirstDivision);

console.log('>>>>>>>>>>>>>>>>')

class ManchesterUnited extends EnglishClubs{
    worstTeamInEngland:boolean=true;
    wearsRed():void|string{
        return `Our home color is Red.`
    }
};
const stupidManUnitedFan=new ManchesterUnited('ManUnited',true);
console.log(stupidManUnitedFan.wearsRed());
console.log(stupidManUnitedFan.goodLeague());
console.log(`Yes i'm a ${stupidManUnitedFan.name} and ${stupidManUnitedFan.wearsRed()}`);
console.log(clubOutsideUK instanceof FootballClub);
console.log(myClub instanceof EnglishClubs);
console.log(stupidManUnitedFan instanceof FootballClub);
console.log(clubOutsideUK instanceof EnglishClubs);

class CustomError{
    message:string;
    code:number;

    constructor(theMessage:string,theCode:number){
        this.message=theMessage;
        this.code=theCode;
    }
    show():void{
        console.log(this.code);
        console.log(this.message);
    }
}

class NotFoundError extends CustomError{
    constructor(theMessage:string){
        super(theMessage, 404);
    }
}

class UserNotFoundError extends NotFoundError{
    constructor(){
        super('Woo, we no find user oo');
    }
}
const NotFound=new NotFoundError('Customer not found');
console.log(NotFound.show());
console.log(NotFound.code)
console.log(NotFound instanceof CustomError);
console.log('>>>>>>>>>>>>>>>>')

const WeNoFindUser=new UserNotFoundError();
console.log(WeNoFindUser.show());
const  tryingSomething=new NotFoundError('i see it now');
console.log(tryingSomething.code);
console.log(WeNoFindUser instanceof NotFoundError);
console.log(WeNoFindUser instanceof CustomError);
console.log('>>>>>>>>>>>>>>>>')

const clubb:FootballClub|EnglishClubs=new EnglishClubs('Arsenal',true);
console.log(clubb);
console.log(clubb.name);
console.log(clubb.hasRefs());
console.log('>>>>>>>>>');

function topTeam(theTeam:FootballClub|EnglishClubs,trophies:number){
    if(theTeam instanceof EnglishClubs){
        return `${theTeam.FirstDivision}, we play at the top level and ${theTeam.goodLeague()}, we also have ${trophies} cups to our name >>>${theTeam.name}`
    }else{
        return `we have ${trophies} cups and ${theTeam.hasRefs()}>>>${theTeam.name}`
    }
}
console.log(topTeam(clubOutsideUK,13));
console.log(topTeam(stupidManUnitedFan,2));
