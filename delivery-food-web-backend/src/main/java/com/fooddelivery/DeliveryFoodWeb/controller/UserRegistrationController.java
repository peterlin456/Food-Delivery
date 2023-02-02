package com.fooddelivery.DeliveryFoodWeb.controller;


import com.fooddelivery.DeliveryFoodWeb.dto.UserServiceRegistrationDto;
import com.fooddelivery.DeliveryFoodWeb.entity.Item;
import com.fooddelivery.DeliveryFoodWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/home/registration")
public class UserRegistrationController {


    private UserService userService;

    @PostMapping
    public String registerUserAccount(@RequestBody UserServiceRegistrationDto userServiceRegistrationDto){

        String registerDetail = String.valueOf(userService.save(userServiceRegistrationDto));
        return  registerDetail;
    }


}
