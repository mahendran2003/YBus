package com.ybus.dto;

import java.util.List;

public class BookingRequest {
    private Long userId;
    private Long busId;
    private List<Integer> seatNumbers;

    public Long getUserId(){ return userId; } public void setUserId(Long userId){ this.userId = userId; }
    public Long getBusId(){ return busId; } public void setBusId(Long busId){ this.busId = busId; }
    public List<Integer> getSeatNumbers(){ return seatNumbers; } public void setSeatNumbers(List<Integer> seatNumbers){ this.seatNumbers = seatNumbers; }
}
