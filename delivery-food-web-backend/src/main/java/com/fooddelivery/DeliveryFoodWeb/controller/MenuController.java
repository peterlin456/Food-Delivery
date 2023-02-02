package com.fooddelivery.DeliveryFoodWeb.controller;


import com.fooddelivery.DeliveryFoodWeb.entity.Item;
import com.fooddelivery.DeliveryFoodWeb.entity.Menu;
import com.fooddelivery.DeliveryFoodWeb.entity.Restaurant;
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
// find the restaurant that have item id


    //this need change
    //know restaurant id, get all the items in the restaurant

//    @GetMapping("/restaurant/item/{itemId}")
//    public ResponseEntity<List<Restaurant>> getRestaurantIdByItemId(@PathVariable Long itemId) {
//        List<Restaurant> restaurants= menuSearchService.findRestaurantIdByItemId(itemId);
//        return new ResponseEntity<>(restaurants, HttpStatus.OK);
//    }
    @GetMapping("/restaurant/{RestaurantId}")
    public ResponseEntity<List<Long>> getItemIdByRestaurantId(@PathVariable Long RestaurantId) {
        List<Long> items = menuSearchService.findItemIdByRestaurantId(RestaurantId);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}
