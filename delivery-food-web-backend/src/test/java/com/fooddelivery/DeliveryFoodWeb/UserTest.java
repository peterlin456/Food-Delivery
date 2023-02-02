//package com.fooddelivery.DeliveryFoodWeb;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//import com.fooddelivery.DeliveryFoodWeb.dao.UserRepository;
//import com.fooddelivery.DeliveryFoodWeb.entity.User;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//import org.springframework.test.annotation.Rollback;
//
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
//@Rollback(false)
//public class UserTest {
//
//    @Autowired
//    private TestEntityManager entityManager;
//
//    @Autowired
//    private UserRepository userRepository;
//
//
//
//    @Test
//    public void testCreateUser(){
//        User user = new User();
//        user.setEmail("ravikumar123@gmail.com");
//        user.setPassword("ravi2021");
//        user.setFirstname("Ravi");
//        user.setLastname("Kumar");
//
//        User savedUser = userRepository.save(user);
//
//        User existUser = entityManager.find(User.class, savedUser.getId());
//
//        assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
//    }
//
//}
