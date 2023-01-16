package com.fooddelivery.DeliveryFoodWeb.dao;

import com.fooddelivery.DeliveryFoodWeb.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository  extends JpaRepository<Customer, Long> {

    Customer findByEmail(String theEmail);//return null if not find

}
