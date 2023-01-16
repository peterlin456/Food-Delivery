package com.fooddelivery.DeliveryFoodWeb.dao;


import com.fooddelivery.DeliveryFoodWeb.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {


}
