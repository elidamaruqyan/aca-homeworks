/** We did it during classwork **/
class Person {
    constructor(fname, lname, gender, age) {
        this.fname = fname;
        this.lname = lname;
        this._gender = gender;
        this._age = age;
    }

    get gender() {
        return this._gender;
    }

    get age() {
        return this._age;
    }

    set gender(value) {
        this._gender = value;
    }

    set age(age) {
        if (age < 18) {
            throw new Error("Sorry!");
        }

        this._age = age;
    }

    toString() {
        return `${this.fname} ${this.lname}, ${this.age} y. old`;
    }
}

class Student extends Person {
    constructor(fname, lname, gender, age, fee, year, program) {
        super(fname, lname, gender, age);

        this.fee = fee;
        this.year = year;
        this.program = program;
        this.passedExams = program.map((p) => ({
            name: p,
            grade: 0,
        }));
    }

    // toString() {
    // super call
    //   return 'student'
    // }

    // @TODO: refactor data structure
    passExam(name, grade) {
        this.passedExams = this.passedExams.map((p) => {
            if (p.name === name) {
                return {
                    name,
                    grade,
                };
            }

            return p;
        });

        const isAllPassed = this.passedExams.every((p) => p.grade > 50);

        if (isAllPassed) {
            this.year = this.year + 1;
        }
    }
}

const stud1 = new Student("Vrezh", "Oganisyan", "M", 22, 1000, 2020, [
    "math",
    "physics",
    "history",
]);

console.log(stud1);

stud1.passExam("math", 90);
stud1.passExam("history", 90);
stud1.passExam("physics", 40);

console.log(stud1);

stud1.passExam("physics", 80);

console.log(stud1);
