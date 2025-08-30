package com.ybus.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity @Table(name="bookings")
public class Booking {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long busId;

    @Column(length = 1000)
    private String seatNumbersCsv; // e.g. "1,2,3"

    private LocalDateTime bookingDate;
    private String status;         // CREATED, CONFIRMED, CANCELLED
    private String paymentStatus;  // PENDING, SUCCESS, FAILED
    private String paymentRef;     // simulated ref
    private double totalAmount;

    // getters/setters
    public Long getId(){ return id; } public void setId(Long id){ this.id = id; }
    public Long getUserId(){ return userId; } public void setUserId(Long userId){ this.userId = userId; }
    public Long getBusId(){ return busId; } public void setBusId(Long busId){ this.busId = busId; }
    public String getSeatNumbersCsv(){ return seatNumbersCsv; } public void setSeatNumbersCsv(String seatNumbersCsv){ this.seatNumbersCsv = seatNumbersCsv; }
    public LocalDateTime getBookingDate(){ return bookingDate; } public void setBookingDate(LocalDateTime bookingDate){ this.bookingDate = bookingDate; }
    public String getStatus(){ return status; } public void setStatus(String status){ this.status = status; }
    public String getPaymentStatus(){ return paymentStatus; } public void setPaymentStatus(String paymentStatus){ this.paymentStatus = paymentStatus; }
    public String getPaymentRef(){ return paymentRef; } public void setPaymentRef(String paymentRef){ this.paymentRef = paymentRef; }
    public double getTotalAmount(){ return totalAmount; } public void setTotalAmount(double totalAmount){ this.totalAmount = totalAmount; }
}
