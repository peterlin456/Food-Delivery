package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.dao.RestaurantRepository;
import com.fooddelivery.DeliveryFoodWeb.entity.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantSearchServiceImpl implements RestaurantSearchService{
    //find restaurant name contains specific characters

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Override
    public List<Restaurant> findByNameContainingIgnoreCase(String name) {
        return restaurantRepository.findByNameContainingIgnoreCase(name);
    }
}
