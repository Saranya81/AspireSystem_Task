// Inheritance
// Author: Saranya R
// Created Date: 05/04/2024
public class EmpInheritance {
    private String name;
    private String id;
    private double salary;

    public EmpInheritance(String name, String id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    public void displayInfo() {
        System.out.println(name);
        System.out.println(id);
        System.out.println(salary);
    }
     public static void main(String[] args) {
        Manager manager = new Manager("Anand", "M001", 5000.0, "IT");
        Worker worker = new Worker("Kavin", "W001", 3000.0, "HR", 45);
        Intern intern = new Intern("Alex ", "I001", 1000.0, 3);
        manager.displayInfo();
        System.out.println();

        worker.displayInfo();
        System.out.println();

        intern.displayInfo();
    }
}

// Single Inheritance
class Manager extends EmpInheritance {
    private String department;

    public Manager(String name, String id, double salary, String department) {
        super(name, id, salary);
        this.department = department;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println(department);
    }
}

// Multilevel Inheritance
class Worker extends Manager {
    private int hoursWorked;

    public Worker(String name, String id, double salary, String department, int hoursWorked) {
        super(name, id, salary, department);
        this.hoursWorked = hoursWorked;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println(hoursWorked);
    }
}

// Hierarchical Inheritance
class Intern extends EmpInheritance {
    private int duration; 

    public Intern(String name, String id, double salary, int duration) {
        super(name, id, salary);
        this.duration = duration;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println(duration);
    }
}

   
    

