package com.fooddelivery.DeliveryFoodWeb.dao;


import com.fooddelivery.DeliveryFoodWeb.entity.Item;
import com.fooddelivery.DeliveryFoodWeb.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    List<Restaurant> findByNameContainingIgnoreCase(String name);

}
