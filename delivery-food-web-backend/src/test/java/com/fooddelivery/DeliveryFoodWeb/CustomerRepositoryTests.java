package com.fooddelivery.DeliveryFoodWeb;

import static org.assertj.core.api.Assertions.assertThat;
import com.fooddelivery.DeliveryFoodWeb.dao.CustomerRepository;
import com.fooddelivery.DeliveryFoodWeb.entity.Customer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class CustomerRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CustomerRepository customerRepository ;

    @Test
    public void testCreateUser() {
        Customer customer = new Customer();
        customer.setEmail("ravikumar@gmail.com");
        customer.setPassword("ravi2020");
        customer.setFirstName("Ravi");
        customer.setLastName("Kumar");

        Customer savedUser = customerRepository.save(customer);

        Customer existUser = entityManager.find(Customer.class, savedUser.getId());

        assertThat(customer.getEmail()).isEqualTo(existUser.getEmail());

    }
}
