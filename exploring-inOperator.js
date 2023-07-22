var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var boluwatife = {
    name: 'Tunde-lawal Boluwatife John',
    level: 500,
    smart: true
};
var fisayo = {
    name: 'Tunde-lawal Oluwafisayomi',
    age: 15,
    class: 'SS3A',
    smart: true,
    ownLaptop: true
};
function student(saidStudent) {
    if ('level' in saidStudent) { // narrowing down to university.
        return "this student is in ".concat(saidStudent.level, " level");
    }
    return saidStudent.class;
}
;
console.log(student(boluwatife));
//instanceof operator.
var FootballClub = /** @class */ (function () {
    function FootballClub(name, FirstDivision) {
        this.name = name;
        this.FirstDivision = FirstDivision;
    }
    FootballClub.prototype.hasRefs = function () {
        return 'Yeah, we have refrees';
    };
    return FootballClub;
}());
var EnglishClubs = /** @class */ (function (_super) {
    __extends(EnglishClubs, _super);
    function EnglishClubs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnglishClubs.prototype.hasRefs = function () {
        return "Our refs speak very good English";
    };
    EnglishClubs.prototype.goodLeague = function () {
        return 'Our League is the best itw';
    };
    return EnglishClubs;
}(FootballClub));
var myClub = new EnglishClubs('Liverpool FC', true);
console.log(myClub.name);
console.log(myClub.hasRefs());
console.log("".concat(myClub.FirstDivision, ", we play in the First Division"));
var clubOutsideUK = new FootballClub('Real Madrid', true);
console.log(clubOutsideUK.hasRefs());
console.log(clubOutsideUK.FirstDivision);
console.log('>>>>>>>>>>>>>>>>');
var ManchesterUnited = /** @class */ (function (_super) {
    __extends(ManchesterUnited, _super);
    function ManchesterUnited() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.worstTeamInEngland = true;
        return _this;
    }
    ManchesterUnited.prototype.wearsRed = function () {
        return "Our home color is Red.";
    };
    return ManchesterUnited;
}(EnglishClubs));
;
var stupidManUnitedFan = new ManchesterUnited('ManUnited', true);
console.log(stupidManUnitedFan.wearsRed());
console.log(stupidManUnitedFan.goodLeague());
console.log("Yes i'm a ".concat(stupidManUnitedFan.name, " and ").concat(stupidManUnitedFan.wearsRed()));
console.log(clubOutsideUK instanceof FootballClub);
console.log(myClub instanceof EnglishClubs);
console.log(stupidManUnitedFan instanceof FootballClub);
console.log(clubOutsideUK instanceof EnglishClubs);
var CustomError = /** @class */ (function () {
    function CustomError(theMessage, theCode) {
        this.message = theMessage;
        this.code = theCode;
    }
    CustomError.prototype.show = function () {
        console.log(this.code);
        console.log(this.message);
    };
    return CustomError;
}());
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(theMessage) {
        return _super.call(this, theMessage, 404) || this;
    }
    return NotFoundError;
}(CustomError));
var UserNotFoundError = /** @class */ (function (_super) {
    __extends(UserNotFoundError, _super);
    function UserNotFoundError() {
        return _super.call(this, 'Woo, we no find user oo') || this;
    }
    return UserNotFoundError;
}(NotFoundError));
var NotFound = new NotFoundError('Customer not found');
console.log(NotFound.show());
console.log(NotFound.code);
console.log(NotFound instanceof CustomError);
console.log('>>>>>>>>>>>>>>>>');
var WeNoFindUser = new UserNotFoundError();
console.log(WeNoFindUser.show());
var tryingSomething = new NotFoundError('i see it now');
console.log(tryingSomething.code);
console.log(WeNoFindUser instanceof NotFoundError);
console.log(WeNoFindUser instanceof CustomError);
console.log('>>>>>>>>>>>>>>>>');
var clubb = new EnglishClubs('Arsenal', true);
console.log(clubb);
console.log(clubb.name);
console.log(clubb.hasRefs());
console.log('>>>>>>>>>');
function topTeam(theTeam, trophies) {
    if (theTeam instanceof EnglishClubs) {
        return "".concat(theTeam.FirstDivision, ", we play at the top level and ").concat(theTeam.goodLeague(), ", we also have ").concat(trophies, " cups to our name >>>").concat(theTeam.name);
    }
    else {
        return "we have ".concat(trophies, " cups and ").concat(theTeam.hasRefs(), ">>>").concat(theTeam.name);
    }
}
console.log(topTeam(clubOutsideUK, 13));
console.log(topTeam(stupidManUnitedFan, 2));
