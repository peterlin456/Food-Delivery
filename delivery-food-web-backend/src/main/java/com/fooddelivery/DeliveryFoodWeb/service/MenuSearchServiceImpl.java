package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.dao.MenuRepository;
import com.fooddelivery.DeliveryFoodWeb.entity.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuSearchServiceImpl implements MenuSearchService{

    @Autowired
    private MenuRepository menuRepository;

    @Override
    public Long findRestaurantIdByItemId(Long itemId) {
        return menuRepository.findRestaurantIdByItemId(itemId);
    }
}
