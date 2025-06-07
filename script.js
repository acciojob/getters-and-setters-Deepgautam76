//complete this code
class Person {
	cunstructor(name,age){
		this.name=name;
		this.age=age;
   }
   get name(){
	   return this.name;
   }	
	set name(newName){
		this.name=newName;
   }
	get age(){
		return this.age;
   }
   set age(age){
	   this.age=age;
   }	
}

class Student extends Person {
	study(){
		console.log(this.name+" is studying");
   }
}

class Teacher extends Person {
	teach(){
		console.log(this.name+" is teaching");
	}
}
const person=new Person("John",25);
console.log(person.name);
person.age=30;
console.log(person.age);

const student=new Student("Alice",22);
student.study();

const teacher=new Teacher("Bob",30);
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
