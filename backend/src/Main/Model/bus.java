package com.ybus.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity @Table(name="buses")
public class Bus {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String operatorName;
    private String routeFrom;
    private String routeTo;

    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;

    private int totalSeats;
    private double price;

    @OneToMany(mappedBy = "bus", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Seat> seats;

    // getters/setters
    public Long getId(){ return id; } public void setId(Long id){ this.id = id; }
    public String getOperatorName(){ return operatorName; } public void setOperatorName(String operatorName){ this.operatorName = operatorName; }
    public String getRouteFrom(){ return routeFrom; } public void setRouteFrom(String routeFrom){ this.routeFrom = routeFrom; }
    public String getRouteTo(){ return routeTo; } public void setRouteTo(String routeTo){ this.routeTo = routeTo; }
    public LocalDateTime getDepartureTime(){ return departureTime; } public void setDepartureTime(LocalDateTime departureTime){ this.departureTime = departureTime; }
    public LocalDateTime getArrivalTime(){ return arrivalTime; } public void setArrivalTime(LocalDateTime arrivalTime){ this.arrivalTime = arrivalTime; }
    public int getTotalSeats(){ return totalSeats; } public void setTotalSeats(int totalSeats){ this.totalSeats = totalSeats; }
    public double getPrice(){ return price; } public void setPrice(double price){ this.price = price; }
    public List<Seat> getSeats(){ return seats; } public void setSeats(List<Seat> seats){ this.seats = seats; }
}
