package com.fooddelivery.DeliveryFoodWeb.dao;

import com.fooddelivery.DeliveryFoodWeb.dto.UserDto;
import com.fooddelivery.DeliveryFoodWeb.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {


    User findByEmailAndPassword(String email, String password);


    User findByEmail(String email);

    boolean existsByEmail(String email);
}
