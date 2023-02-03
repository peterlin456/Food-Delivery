package com.fooddelivery.DeliveryFoodWeb.dao;

import com.fooddelivery.DeliveryFoodWeb.entity.Item;
import com.fooddelivery.DeliveryFoodWeb.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;



@Repository
public interface MenuRepository extends JpaRepository<Menu,Long> {

//    @Query("SELECT m.restaurant FROM Menu m JOIN m.item i WHERE i.id = :itemId")
//    Long findRestaurantIdByItemId(@Param("itemId") Long itemId);
    @Query("SELECT item FROM Menu m JOIN m.item item WHERE m.restaurant.id = :restaurantId")
    List<Item> findItemIdByRestaurantId(@Param("restaurantId") Long RestaurantId);


    //search by restaurant name

}
