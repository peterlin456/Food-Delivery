package com.fooddelivery.DeliveryFoodWeb.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class Customer {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private String name;

    @Column(nullable=false, unique=true)
    private String email;

    @Column(nullable=false)
    private String password;
}
