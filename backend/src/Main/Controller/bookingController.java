package com.ybus.controller;

import com.ybus.dto.BookingRequest;
import com.ybus.dto.PaymentRequest;
import com.ybus.model.Booking;
import com.ybus.service.BookingService;
import com.ybus.service.PaymentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin
public class BookingController {
    private final BookingService bookingService;
    private final PaymentService paymentService;

    public BookingController(BookingService bookingService, PaymentService paymentService){
        this.bookingService = bookingService; this.paymentService = paymentService;
    }

    @GetMapping public List<Booking> list(){ return bookingService.list(); }
    @GetMapping("/{id}") public Booking get(@PathVariable Long id){ return bookingService.get(id); }

    // Create booking + atomically lock seats
    @PostMapping public Booking create(@RequestBody BookingRequest req){
        return bookingService.createBooking(req);
    }

    // Simulate payment success
    @PostMapping("/{id}/pay")
    public Booking pay(@PathVariable Long id, @RequestBody PaymentRequest req){
        return paymentService.simulatePayment(id, req);
    }
}
