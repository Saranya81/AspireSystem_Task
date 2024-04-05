public class Main {
    public static void main(String[] args) {
        Employee emp1 = new Employee("Abi", 30, 50000);
        System.out.println(emp1);
//Copy constructor
        Employee emp2 = new Employee(emp1);
        System.out.println(emp2);
        emp2.setName("Saranya");
        emp2.setAge(20);
        emp2.setSalary(60000);
        System.out.println(emp2);
    }
}