package com.fooddelivery.DeliveryFoodWeb;


import static org.assertj.core.api.Assertions.assertThat;

import com.fooddelivery.DeliveryFoodWeb.dto.UserServiceRegistrationDto;
import com.fooddelivery.DeliveryFoodWeb.entity.User;
import com.fooddelivery.DeliveryFoodWeb.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;


@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class CustomerRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserService userService;

    @Test
    public void testCreateUser() {
        // given
        UserServiceRegistrationDto user = new UserServiceRegistrationDto();
        user.setFirstname("John");
        user.setLastname("Doe");
        user.setEmail("john.doe@example.com");
        user.setPassword("password");


        // when
        User saveUser = userService.save(user);

        // then
        assertThat(saveUser.getEmail()).isEqualTo(user.getEmail());
    }


}