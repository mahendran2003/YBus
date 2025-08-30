package com.ybus.repository;

import com.ybus.model.Seat;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {

    List<Seat> findByBus_IdAndBookedFalse(Long busId);

    @Modifying
    @Query("update Seat s set s.booked=true " +
           "where s.bus.id = :busId and s.seatNumber in :seatNumbers and s.booked=false")
    int lockSeats(@Param("busId") Long busId, @Param("seatNumbers") List<Integer> seatNumbers);
}
