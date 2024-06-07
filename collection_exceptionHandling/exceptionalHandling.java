// <!--Title:Exceptional handling example 
// Author:Saranya R
// Created date:31-05-2024-->
import java.util.InputMismatchException;
import java.util.Scanner;

public class exceptionalHandling {
    public static void main(String[] args) {
       
        try {
            int result = divide(10, 0); 
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Finally block executed");
        }

        try {
            validateAge(15); 
        } catch (IllegalArgumentException e) {
            System.out.println( e.getMessage());
        }
    }

    public static int divide(int a, int b) {
        return a / b;
    }

    public static void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be at least 18");
        }
        System.out.println("Age is valid");
    }
}
