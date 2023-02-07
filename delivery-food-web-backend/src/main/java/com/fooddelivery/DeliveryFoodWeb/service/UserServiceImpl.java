package com.fooddelivery.DeliveryFoodWeb.service;

import com.fooddelivery.DeliveryFoodWeb.dao.UserRepository;
import com.fooddelivery.DeliveryFoodWeb.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{



    @Autowired
    private UserRepository userRepository;



//    @Override
//    public User registrationUser(String email, String firstname, String lastname, String password) {
//        if(email == null || firstname == null || lastname == null || password == null){
//            return  null;
//        }else{
//            User user = new User();
//            user.setEmail(email);
//            user.setFirstname(firstname);
//            user.setLastname(lastname);
//            user.setPassword(password);
//
//            return userRepository.save(user);
//        }
//    }
//
    @Override
    public User authenticateUser(String email, String password) {

        return userRepository.findByEmailAndPassword(email,password).orElseThrow(null);

    }

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User register(User user) {
            return userRepository.save(user);

    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

}
