package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.dao.UserRepository;
import com.fooddelivery.DeliveryFoodWeb.dto.UserServiceRegistrationDto;
import com.fooddelivery.DeliveryFoodWeb.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{



    @Autowired
    private UserRepository userRepository;



    @Override
    public User save(UserServiceRegistrationDto userServiceRegistrationDto) {
        User user = new User(userServiceRegistrationDto.getFirstname(),userServiceRegistrationDto.getLastname(),
                userServiceRegistrationDto.getPassword(),userServiceRegistrationDto.getEmail());

        return userRepository.save(user);
    }

    @Override
    public User authenticateUser(String email, String password) throws UsernameNotFoundException{
        User user = userRepository.findByEmailAndPassword(email,password);
        if(user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return user;
    }

}
