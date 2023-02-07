package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.entity.Item;


import java.util.List;

public interface MenuSearchService {
    public List<Item> findItemIdByRestaurantId(Long RestaurantId);
}
