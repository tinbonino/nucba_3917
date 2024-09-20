interface Employee {
    id:number;
    name:string;
    position:string;
    salary:number
}

class EmployeeClass implements Employee {

    constructor(
        public id:number,
        public name:string,
        public position:string,
        public salary:number
    ) {}

}

class DirectorClass extends EmployeeClass {
    constructor(
        id:number,
        name:string,
        position:string,
        salary:number,
        public area:string
    ) {
        super(id,name,position,salary)
    }

    contratar(nuevoEmpleado: Employee) {
        console.log(`Contratando nuevo empleado ${nuevoEmpleado.name} para el área ${this.area}.`);
        // Lógica para contratar al empleado
    }

    despedir(empleado: Employee) {
        console.log(`Despidiendo empleado ${empleado.name} del área ${this.area}.`);
        // Lógica para despedir al empleado
    }
}



const employee1: Employee = new EmployeeClass(1, "John Doe", "Developer", 50000);

console.log("Employee Information:");
console.log("ID:", employee1.id);
console.log("Name:", employee1.name);
console.log("Position:", employee1.position);
console.log("Salary:", employee1.salary);


const director1: DirectorClass=new DirectorClass(2,"Perez","Director",150000,"Tec")

director1.contratar(new EmployeeClass(3,"Pepe","Limpieza",15000))