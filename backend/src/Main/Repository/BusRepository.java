package com.ybus.repository;

import com.ybus.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BusRepository extends JpaRepository<Bus, Long> {
    List<Bus> findByRouteFromIgnoreCaseAndRouteToIgnoreCase(String routeFrom, String routeTo);
}
