package com.fooddelivery.DeliveryFoodWeb.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class UserServiceRegistrationDto {

    private String firstname;

    private String lastname;

    private String email;

    private String password;


}
