package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.entity.Restaurant;

import java.util.List;

public interface RestaurantSearchService {

    public List<Restaurant> findByNameContainingIgnoreCase(String name);

}
