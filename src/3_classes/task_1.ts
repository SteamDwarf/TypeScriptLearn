class User {
    skills: string [] = [];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;

    addSkill(skill: string | string[]):void {
        if(typeof skill === 'string') {
            this.skills.push(skill)
        } else if(Array.isArray(skill)) {
            this.skills = [...this.skills, ...skill]
        }
    }
}

const user = new User();

user.addSkill('HTML');
console.log(user);
user.addSkill(['CSS', 'JS'])
console.log(user);

export {};
