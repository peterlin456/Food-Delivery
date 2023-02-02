package com.fooddelivery.DeliveryFoodWeb.controller;



import com.fooddelivery.DeliveryFoodWeb.entity.Item;
import com.fooddelivery.DeliveryFoodWeb.entity.Restaurant;
import com.fooddelivery.DeliveryFoodWeb.entity.User;
import com.fooddelivery.DeliveryFoodWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class UserRegistrationController {


    @Autowired
    private UserService userService;


    @PostMapping("/registration")
    public User registerUserAccount(@RequestBody User user){

        User createUser = userService.registrationUser(user.getEmail(),
                user.getFirstname(), user.getLastname(), user.getPassword());

        return createUser;
    }


}
