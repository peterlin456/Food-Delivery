package com.fooddelivery.DeliveryFoodWeb.dao;

import com.fooddelivery.DeliveryFoodWeb.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {

}
