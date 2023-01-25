package com.fooddelivery.DeliveryFoodWeb.controller;


import com.fooddelivery.DeliveryFoodWeb.entity.Restaurant;


import com.fooddelivery.DeliveryFoodWeb.service.RestaurantSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/restaurant")
public class RestaurantSearchController {

    @Autowired
    private RestaurantSearchService restaurantSearchService;

    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> getRestaurant(@RequestParam("name") String name) {
        List<Restaurant> restaurants= restaurantSearchService.findByNameContainingIgnoreCase(name);
        return new ResponseEntity<>(restaurants, HttpStatus.OK);
    }
}
