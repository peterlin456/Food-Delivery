package com.fooddelivery.DeliveryFoodWeb.controller;


import com.fooddelivery.DeliveryFoodWeb.entity.Item;
import com.fooddelivery.DeliveryFoodWeb.service.SearchService;
import com.fooddelivery.DeliveryFoodWeb.service.SearchServiceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/item")
public class SearchController {
    @Autowired
    private SearchService searchService;

    @GetMapping("/search")
    public ResponseEntity<List<Item>> search(@RequestParam("name") String name) {

        return new ResponseEntity<>(searchService.searchItems(name), HttpStatus.OK);
    }



}
