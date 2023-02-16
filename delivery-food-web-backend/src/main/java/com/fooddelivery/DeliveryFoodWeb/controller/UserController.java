package com.fooddelivery.DeliveryFoodWeb.controller;


import com.fooddelivery.DeliveryFoodWeb.entity.User;
import com.fooddelivery.DeliveryFoodWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.Set;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class UserController {

    // test version 1, will add spring security jwt
    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<?> loginUserAccount(@RequestBody User user){
        boolean loginuser = userService.authenticateUser(user.getEmail(), user.getPassword());

        if(loginuser == true){
            return new ResponseEntity<>("User Login", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Wrong Credentials",
                    HttpStatus.BAD_REQUEST);
        }

    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userService.existsByEmail(user.getEmail())) {
            return new ResponseEntity<>("Email is already taken!",
                    HttpStatus.BAD_REQUEST);
        }



        User registeredUser = userService.register(user);

        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }

    //	public static final Logger logger = LoggerFactory.getLogger(AccountController.class);
    // request method to create a new account by a guest
//    @RequestMapping(value = "/register", method = RequestMethod.POST)
//    public ResponseEntity<?> createUser(@RequestBody User newUser) {
//        if (userService.find(newUser.getUsername()) != null) {
//            logger.error("username Already exist " + newUser.getUsername());
//            return new ResponseEntity(
//                    new CustomErrorType("user with username " + newUser.getUsername() + "already exist "),
//                    HttpStatus.CONFLICT);
//        }
//        newUser.setRole("USER");
//
//        return new ResponseEntity<User>(userService.save(newUser), HttpStatus.CREATED);
//    }
//
//    // this is the login api/service
//    @CrossOrigin
//    @RequestMapping("/login")
//    public Principal user(Principal principal) {
//        logger.info("user logged "+principal);
//        return principal;
//    }

}
