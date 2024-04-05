// Polymorphism - Method Overloading , Method Overriding 
// Author: Saranya R
// Created Date: 05/04/2024

class EmployeePolymorphism {
    protected String name;

    public EmployeePolymorphism(String name) {
        this.name = name;
    }

    public void getDetails() {
        System.out.println(name);
    }

    // Overloading
    public void getDetails(double bonus) {
        System.out.println(name + bonus);
    }
    public static void main(String[] args) {
        
        EmployeePolymorphism employee = new EmployeePolymorphism("arun");
        FullTimeEmployee fullTimeEmployee = new FullTimeEmployee("Kalai", 2000);
        employee.getDetails();             
        employee.getDetails(1000);         
        fullTimeEmployee.getDetails();     
    }
}

class FullTimeEmployee extends EmployeePolymorphism {
    private double bonus;

    public FullTimeEmployee(String name, double bonus) {
        super(name);
        this.bonus = bonus;
    }

    // Method overriding 
    @Override
    public void getDetails() {
        super.getDetails();  
        System.out.println( bonus);
    }
}


    

