// CopyConstructor
// Author: Saranya R
// Created Date: 05/04/2024
public class EmpCopyConstuctor {
    private String name;
    private int age;
    private double salary;

    // Normal Constructor
    public EmpCopyConstuctor(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Copy Constructor
    public EmpCopyConstuctor(EmpCopyConstuctor other) {
        this.name = other.name;
        this.age = other.age;
        this.salary = other.salary;
    }

    void display() {
        System.out.println(name + " " + age + " " + salary);
    }

    // Encapsulation - Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public static void main(String[] args) {
        EmpCopyConstuctor emp1 = new EmpCopyConstuctor("Abi", 30, 50000);
        emp1.display();

        // Copy constructor
        EmpCopyConstuctor emp2 = new EmpCopyConstuctor(emp1);
        emp2.display();

        emp2.setName("Saranya");
        emp2.setAge(20);
        emp2.setSalary(60000);
        emp2.display();
    }
}
