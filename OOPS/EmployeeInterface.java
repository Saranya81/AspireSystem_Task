// Interface
// Author: Saranya R
// Created Date: 05/04/2024
interface EmployeeInterface {
    double calculate();
    public static void main(String[] args) {
        FullTimeEmployee fullTimeEmployee = new FullTimeEmployee("Kalai", 60000);

        System.out.println(fullTimeEmployee.calculate());
        System.out.println(fullTimeEmployee.getName());
    }
}

class FullTimeEmployee implements EmployeeInterface {
    private String name;
    private double salary;

    public FullTimeEmployee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public double calculate() {
        return this.salary / 12;
    }

    public String getName() {
        return name;
    }
}


    

