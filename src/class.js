class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        alert(this.name)
    }
}

let man = new Man('Alise', 23);
man.sayHi()

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name)
    }
}
let name = new User('Fedor');

function Student(profession) {
    this.skill = profession;
    this.isAdmin = false;
}

let student = new Student('welding')
/*Student это функция конструктор, функция конструктор пишется с Большой Буквы. А вызывается функция-конструктор 
Students  с помощью оператора New
2. а уже переменная students объявленная - является объектом, созданным на основе функции-конструктора Students
*/
console.log(typeof (students));
