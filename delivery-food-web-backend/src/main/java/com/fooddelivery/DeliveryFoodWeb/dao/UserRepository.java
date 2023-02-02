package com.fooddelivery.DeliveryFoodWeb.dao;

import com.fooddelivery.DeliveryFoodWeb.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;





public interface UserRepository extends JpaRepository<User,Long> {

    User findByEmailAndPassword(String email, String password);
}
