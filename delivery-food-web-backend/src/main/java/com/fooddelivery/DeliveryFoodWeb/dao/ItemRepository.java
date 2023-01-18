package com.fooddelivery.DeliveryFoodWeb.dao;

import com.fooddelivery.DeliveryFoodWeb.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;



public interface ItemRepository extends JpaRepository<Item, Long> {

    Page<Item> findByCategoryId(@Param("id") Long id, Pageable pageable);

    Page<Item> findByNameContaining(@Param("name") String name, Pageable pageable);
}
