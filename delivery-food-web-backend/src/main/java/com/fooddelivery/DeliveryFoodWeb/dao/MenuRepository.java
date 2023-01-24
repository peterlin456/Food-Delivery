package com.fooddelivery.DeliveryFoodWeb.dao;

import com.fooddelivery.DeliveryFoodWeb.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu,Long> {
    @Query("SELECT m.restaurant.id FROM Menu m JOIN m.items i WHERE i.id = :itemId")
    Long findRestaurantIdByItemId(@Param("itemId") Long itemId);

//@Query(value = "SELECT m.name, r.name FROM Menu m JOIN m.restaurant r WHERE m.name like CONCAT('%',:letter,'%')",nativeQuery = true)
//List<Object[]> findAllMenuItemsContainingLetterAndRestaurants(String letter);

}
