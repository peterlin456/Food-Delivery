package com.fooddelivery.DeliveryFoodWeb.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name="customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstname", nullable = false, length = 20)
    private String firstname;

    @Column(name = "lastname", nullable = false, length = 20)
    private String lastname;

    @Column(name = "email", nullable=false, unique=true)
    private String email;

    @Column(name = "password", nullable = false, length = 64)
    private String password;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
