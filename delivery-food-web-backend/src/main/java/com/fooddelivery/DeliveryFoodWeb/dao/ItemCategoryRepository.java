package com.fooddelivery.DeliveryFoodWeb.dao;


import com.fooddelivery.DeliveryFoodWeb.entity.ItemCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;


public interface ItemCategoryRepository extends JpaRepository<ItemCategory, Long> {
    Optional<ItemCategory> findByNameIgnoreCase(String name);
}
