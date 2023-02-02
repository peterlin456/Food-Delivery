package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.dto.UserServiceRegistrationDto;
import com.fooddelivery.DeliveryFoodWeb.entity.User;

public interface UserService {
    User save(UserServiceRegistrationDto userServiceRegistrationDto);
    User authenticateUser(String email, String password);
}
