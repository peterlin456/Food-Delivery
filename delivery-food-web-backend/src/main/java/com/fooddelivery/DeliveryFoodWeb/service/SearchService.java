package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.entity.Item;

import java.util.List;

public interface SearchService {
    List<Item> searchItems(String name);
}
