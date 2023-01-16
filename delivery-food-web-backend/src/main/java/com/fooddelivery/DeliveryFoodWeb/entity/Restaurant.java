package com.fooddelivery.DeliveryFoodWeb.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "list_restaurant")
@Data
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "type")
    private String type;

    @Column(name = "status")
    private boolean active;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "resturant_address_id", referencedColumnName = "id")
    private Address resturantAddress;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "restaurant")
    private Set<ProductCategory> productCategories;



}
