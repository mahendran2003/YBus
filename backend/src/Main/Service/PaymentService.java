package com.ybus.service;

import com.ybus.dto.PaymentRequest;
import com.ybus.exception.ApiException;
import com.ybus.model.Booking;
import com.ybus.repository.BookingRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    private final BookingRepository bookingRepo;

    public PaymentService(BookingRepository bookingRepo){ this.bookingRepo = bookingRepo; }

    @Transactional
    public Booking simulatePayment(Long bookingId, PaymentRequest req){
        Booking b = bookingRepo.findById(bookingId)
                .orElseThrow(() -> new ApiException("Booking not found"));

        if(!"PENDING".equalsIgnoreCase(b.getPaymentStatus()))
            throw new ApiException("Payment already processed");

        // Simulate success
        b.setPaymentStatus("SUCCESS");
        b.setPaymentRef(req.getPaymentRef() == null ? "SIM-"+bookingId : req.getPaymentRef());
        return bookingRepo.save(b);
    }
}
