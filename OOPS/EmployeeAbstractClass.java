//Abstract Class
// Author: Saranya R
// Created Date: 05/04/2024
abstract class EmployeeAbstractClass {
    protected String name;

    public EmployeeAbstractClass(String name) {
        this.name = name;
    }

    public abstract double calculate();
    public static void main(String[] args) {
        FullTimeEmployee fullTimeEmployee = new FullTimeEmployee("Saranya", 60000);
        System.out.println(fullTimeEmployee.calculate());
    }
}

class FullTimeEmployee extends EmployeeAbstractClass {
    private double salary;

    public FullTimeEmployee(String name, double salary) {
        super(name);
        this.salary = salary;
    }

    @Override
    public double calculate() {
        return this.salary / 12;
    }
}


    

