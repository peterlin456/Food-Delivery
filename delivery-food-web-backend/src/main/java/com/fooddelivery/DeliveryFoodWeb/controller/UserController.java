package com.fooddelivery.DeliveryFoodWeb.controller;



import com.fooddelivery.DeliveryFoodWeb.entity.User;
import com.fooddelivery.DeliveryFoodWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class UserController {

    // test version 1, will add spring security jwt
    @Autowired
    private UserService userService;


    @PostMapping("/registration")
    public String registerUserAccount(@RequestBody User user){

        User createUser = userService.registrationUser(user.getEmail(),
                user.getFirstname(), user.getLastname(), user.getPassword());

        //this should change to string saying "Hi xxxx your account sign up successfully"
        return createUser.getFirstname() + " your account set up successfully";
    }

    @PostMapping("/login")
    public String loginUserAccount(@RequestBody User user){
        User loginuser = userService.authenticateUser(user.getEmail(),user.getPassword());

        if(loginuser != null){
            return "login successful";
        }
        else{
            return "error";
        }

    }

}
