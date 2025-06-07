//complete this code
class Person {
	cunstructor(name,age){
		this.name=name;
		this.age=age;
   }
	study(){
		console.log(this.name +" is studying");
    }
	teach(){
		console.log(this.name+" is teaching");
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
	custructor(name,age){
		super(name,age);
   }
	study(){
		console.log(this.name+" is studying");
   }
}

class Teacher extends Person {
	custructor(name,age){
		super(name,age);
    }
	teach(){
		console.log(this.name+" is teaching");
	}
}
Person person=new Person("John",25);
console.log(person.name);
person.age(30);
console.log(person.study());

Teacher teacher=new Teacher("John",30);
console.log(teacher.teach());


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
