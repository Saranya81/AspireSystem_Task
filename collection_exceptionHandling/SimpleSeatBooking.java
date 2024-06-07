
// <!--Title:online Bus booking system
// Author:Saranya R
// Created date:31-05-2024-->


//Here I developed online booking system using Collection framework(Set) to implement incorporate the exceptional handling concepts

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class SimpleSeatBooking {
    private static final int TOTAL_SEATS = 50;
    private Set<Integer> bookedSeats = new HashSet<>();

   
    public void bookSeat(int seatNumber) throws Exception {
        if (seatNumber < 1 || seatNumber > TOTAL_SEATS) {
            throw new Exception("Invalid seat number. Please choose a seat number between 1 and " + TOTAL_SEATS + ".");
        }

        if (bookedSeats.contains(seatNumber)) {
            throw new Exception("Seat number " + seatNumber + " is already booked.");
        }

        bookedSeats.add(seatNumber);
        System.out.println("Seat number " + seatNumber + " successfully booked.");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        SimpleSeatBooking bookingSystem = new SimpleSeatBooking();

        System.out.println("Welcome to the Bus Ticket Booking System");

        try {
            while (true) {
                try {
                    System.out.println("Enter seat number to book (1-50):");
                    int seatNumber = scanner.nextInt();

                    bookingSystem.bookSeat(seatNumber);

                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }

                System.out.println("Do you want to book another seat? (yes/no)");
                String response = scanner.next();
                if (!response.equalsIgnoreCase("yes")) {
                    break;
                }
            }
        } finally {
            scanner.close();
            System.out.println("Scanner resource has been closed.");
        }

        System.out.println("Thank you for using the Bus Ticket Booking System!");
    }
}
