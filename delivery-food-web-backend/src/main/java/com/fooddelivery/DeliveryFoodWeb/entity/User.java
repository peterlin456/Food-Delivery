package com.fooddelivery.DeliveryFoodWeb.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name="customer")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false, length = 20)
    private String firstname;

    @Column(name = "last_name", nullable = false, length = 20)
    private String lastname;

    @Column(name = "email", nullable=false, unique=true)
    private String email;

    @Column(name = "password", nullable = false, length = 64)
    private String password;

    public User(String firstname, String lastname, String password, String email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    public User() {

    }
}
