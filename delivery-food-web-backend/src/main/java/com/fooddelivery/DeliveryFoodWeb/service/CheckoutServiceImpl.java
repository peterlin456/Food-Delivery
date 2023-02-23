package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.dao.UserRepository;
import com.fooddelivery.DeliveryFoodWeb.dto.Purchase;
import com.fooddelivery.DeliveryFoodWeb.dto.PurchaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public PurchaseResponse placeOrder(Purchase purchase) {
        return null;
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
