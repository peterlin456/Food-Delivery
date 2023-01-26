package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.entity.Menu;
import com.fooddelivery.DeliveryFoodWeb.entity.Restaurant;

import java.util.List;

public interface MenuSearchService {
    public List<Restaurant> findRestaurantIdByItemId(Long itemId);
}
