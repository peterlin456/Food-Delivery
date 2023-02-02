package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.entity.User;

import java.util.Optional;

public interface UserService {

    User registrationUser(String email, String firstname, String lastname, String password);

    User authenticateUser(String email, String password);
}
