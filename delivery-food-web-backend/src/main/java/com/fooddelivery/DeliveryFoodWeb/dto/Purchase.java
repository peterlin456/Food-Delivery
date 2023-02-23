package com.fooddelivery.DeliveryFoodWeb.dto;

import com.fooddelivery.DeliveryFoodWeb.entity.Address;
import com.fooddelivery.DeliveryFoodWeb.entity.Order;
import com.fooddelivery.DeliveryFoodWeb.entity.OrderItem;
import com.fooddelivery.DeliveryFoodWeb.entity.User;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private User user;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
