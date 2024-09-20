"use strict";
class EmployeeClass {
    constructor(id, name, position, salary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
class DirectorClass extends EmployeeClass {
    constructor(id, name, position, salary, area) {
        super(id, name, position, salary);
        this.area = area;
    }
    contratar(nuevoEmpleado) {
        console.log(`Contratando nuevo empleado ${nuevoEmpleado.name} para el área ${this.area}.`);
        // Lógica para contratar al empleado
    }
    despedir(empleado) {
        console.log(`Despidiendo empleado ${empleado.name} del área ${this.area}.`);
        // Lógica para despedir al empleado
    }
}
const employee1 = new EmployeeClass(1, "John Doe", "Developer", 50000);
console.log("Employee Information:");
console.log("ID:", employee1.id);
console.log("Name:", employee1.name);
console.log("Position:", employee1.position);
console.log("Salary:", employee1.salary);
const director1 = new DirectorClass(2, "Perez", "Director", 150000, "Tec");
director1.contratar(new EmployeeClass(3, "Pepe", "Limpieza", 15000));
//# sourceMappingURL=index.js.map