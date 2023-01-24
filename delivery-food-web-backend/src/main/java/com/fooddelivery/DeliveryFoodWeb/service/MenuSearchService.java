package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.entity.Menu;

import java.util.List;

public interface MenuSearchService {
    public Long findRestaurantIdByItemId(Long itemId);
}
