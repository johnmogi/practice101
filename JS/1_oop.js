class Person{
    name = '';
    age = 0;

    addName(name){
        return this.name = name;
    }

    addAge(age){
        return this.age = age
    }

};

class Profession extends Person{
    profession = '';
    constructor(profession=''){
        this.profession = profession;
    }
}

// const john = new Person('john');
// const ben = new Person();

// john.addAge(43);
// console.log(john, ben);

const mike = new Profession('mechanic');
console.log(mike);