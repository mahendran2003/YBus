package com.ybus.service;

import com.ybus.dto.BookingRequest;
import com.ybus.exception.ApiException;
import com.ybus.model.Booking;
import com.ybus.model.Bus;
import com.ybus.repository.BookingRepository;
import com.ybus.repository.BusRepository;
import com.ybus.repository.SeatRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {
    private final BusRepository busRepo;
    private final SeatRepository seatRepo;
    private final BookingRepository bookingRepo;

    public BookingService(BusRepository busRepo, SeatRepository seatRepo, BookingRepository bookingRepo){
        this.busRepo = busRepo; this.seatRepo = seatRepo; this.bookingRepo = bookingRepo;
    }

    @Transactional
    public Booking createBooking(BookingRequest req){
        if(req.getSeatNumbers()==null || req.getSeatNumbers().isEmpty())
            throw new ApiException("No seats selected");

        Bus bus = busRepo.findById(req.getBusId())
                .orElseThrow(() -> new ApiException("Bus not found"));

        // Try to atomically lock (book) all requested seats that are free
        int updated = seatRepo.lockSeats(req.getBusId(), req.getSeatNumbers());
        if(updated != req.getSeatNumbers().size()){
            throw new ApiException("Some seats are already booked. Please refresh seat map.");
        }

        Booking b = new Booking();
        b.setUserId(req.getUserId());
        b.setBusId(req.getBusId());
        b.setSeatNumbersCsv(req.getSeatNumbers().stream()
                .sorted()
                .map(String::valueOf)
                .collect(Collectors.joining(",")));
        b.setBookingDate(LocalDateTime.now());
        b.setStatus("CONFIRMED");
        b.setPaymentStatus("PENDING");
        b.setTotalAmount(bus.getPrice() * req.getSeatNumbers().size());

        return bookingRepo.save(b);
    }

    public Booking get(Long id){
        return bookingRepo.findById(id).orElseThrow(() -> new ApiException("Booking not found"));
    }

    public List<Booking> list(){ return bookingRepo.findAll(); }
}
