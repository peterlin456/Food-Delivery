package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.dao.ItemCategoryRepository;
import com.fooddelivery.DeliveryFoodWeb.dao.ItemRepository;
import com.fooddelivery.DeliveryFoodWeb.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchServiceimpl implements SearchService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ItemCategoryRepository itemCategoryRepository;

    @Override
    public List<Item> searchItems(String name) {
        return itemRepository.findByNameContainingIgnoreCase(name);
    }
}