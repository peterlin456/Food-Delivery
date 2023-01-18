package com.fooddelivery.DeliveryFoodWeb.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "item_category")
public class ItemCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemCategoryId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;
}