package com.ybus.service;

import com.ybus.exception.ApiException;
import com.ybus.model.Bus;
import com.ybus.model.Seat;
import com.ybus.repository.BusRepository;
import com.ybus.repository.SeatRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BusService {
    private final BusRepository busRepo;
    private final SeatRepository seatRepo;

    public BusService(BusRepository busRepo, SeatRepository seatRepo){
        this.busRepo = busRepo; this.seatRepo = seatRepo;
    }

    public Bus createBus(Bus bus){
        if(bus.getTotalSeats() <= 0) throw new ApiException("totalSeats must be > 0");
        Bus saved = busRepo.save(bus);
        // generate seats 1..totalSeats
        List<Seat> seats = new ArrayList<>();
        for(int i=1;i<=saved.getTotalSeats();i++){
            Seat s = new Seat();
            s.setBus(saved);
            s.setSeatNumber(i);
            s.setBooked(false);
            seats.add(s);
        }
        seatRepo.saveAll(seats);
        return saved;
    }

    public List<Bus> search(String from, String to){
        return busRepo.findByRouteFromIgnoreCaseAndRouteToIgnoreCase(from, to);
    }

    public List<Bus> list(){ return busRepo.findAll(); }

    public Bus get(Long id){
        return busRepo.findById(id).orElseThrow(() -> new ApiException("Bus not found"));
    }

    @Transactional
    public Bus update(Long id, Bus req){
        Bus b = get(id);
        b.setOperatorName(req.getOperatorName());
        b.setRouteFrom(req.getRouteFrom());
        b.setRouteTo(req.getRouteTo());
        b.setDepartureTime(req.getDepartureTime());
        b.setArrivalTime(req.getArrivalTime());
        b.setPrice(req.getPrice());
        // NOTE: not changing totalSeats here (to keep seats consistent). Handle separately if needed.
        return busRepo.save(b);
    }

    @Transactional
    public void delete(Long id){
        busRepo.deleteById(id);
    }
}
