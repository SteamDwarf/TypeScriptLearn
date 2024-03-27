var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var User = /** @class */ (function () {
    function User() {
        this.skills = [];
    }
    User.prototype.addSkill = function (skill) {
        if (typeof skill === 'string') {
            this.skills.push(skill);
        }
        else if (Array.isArray(skill)) {
            this.skills = __spreadArray(__spreadArray([], this.skills, true), skill, true);
        }
    };
    return User;
}());
var user = new User();
user.addSkill('HTML');
console.log(user);
user.addSkill(['CSS', 'JS']);
console.log(user);
