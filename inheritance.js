class parent{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}
class child extends parent{
    constructor(name , age ,rollno){
        super(name , age);
        this.rollno = rollno;
    }
}

let obj = new child("sanjeev" , 23 ,101);
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.rollno);
