package com.fooddelivery.DeliveryFoodWeb.controller;


import com.fooddelivery.DeliveryFoodWeb.entity.Menu;
import com.fooddelivery.DeliveryFoodWeb.service.MenuSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class MenuController {
    @Autowired
    private MenuSearchService menuSearchService;

    @GetMapping("/restaurant/item/{itemId}")
    public ResponseEntity<Long> getRestaurantIdByItemId(@PathVariable Long itemId) {
        Long restaurantId = menuSearchService.findRestaurantIdByItemId(itemId);
        return new ResponseEntity<>(restaurantId, HttpStatus.OK);
    }

}
