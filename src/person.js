export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

const isSenior = (age) => age > 60;
export default isSenior;