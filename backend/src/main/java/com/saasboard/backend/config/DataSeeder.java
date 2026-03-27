package com.saasboard.backend.config;

import com.saasboard.backend.model.UserAccount;
import com.saasboard.backend.model.UserRole;
import com.saasboard.backend.model.UserStatus;
import com.saasboard.backend.repository.UserAccountRepository;
import java.time.LocalDate;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedUsers(UserAccountRepository userAccountRepository) {
        return args -> {
            if (userAccountRepository.count() > 0) {
                return;
            }

            userAccountRepository.saveAll(List.of(
                user("Ava Reynolds", "admin@saasboard.io", "Admin@123", UserRole.ADMIN, "Enterprise", UserStatus.ACTIVE, "New York, USA", LocalDate.of(2025, 1, 15)),
                user("Mason Lee", "user@saasboard.io", "User@123", UserRole.USER, "Pro", UserStatus.ACTIVE, "Toronto, Canada", LocalDate.of(2025, 2, 11)),
                user("Sophia Patel", "sophia.patel@saasboard.io", "User@123", UserRole.USER, "Starter", UserStatus.INACTIVE, "Bengaluru, India", LocalDate.of(2024, 12, 3)),
                user("Noah Kim", "noah.kim@saasboard.io", "Admin@123", UserRole.ADMIN, "Enterprise", UserStatus.PENDING, "Seoul, South Korea", LocalDate.of(2025, 3, 9)),
                user("Ava Wilson", "ava.wilson@saasboard.io", "User@123", UserRole.USER, "Pro", UserStatus.ACTIVE, "Austin, USA", LocalDate.of(2025, 4, 18)),
                user("Liam Garcia", "liam.garcia@saasboard.io", "User@123", UserRole.USER, "Starter", UserStatus.ACTIVE, "Madrid, Spain", LocalDate.of(2025, 5, 12)),
                user("Mia Thompson", "mia.thompson@saasboard.io", "User@123", UserRole.USER, "Pro", UserStatus.SUSPENDED, "Sydney, Australia", LocalDate.of(2024, 11, 24)),
                user("James Nguyen", "james.nguyen@saasboard.io", "User@123", UserRole.USER, "Starter", UserStatus.PENDING, "Ho Chi Minh City, Vietnam", LocalDate.of(2025, 3, 1)),
                user("Isabella Brown", "isabella.brown@saasboard.io", "Admin@123", UserRole.ADMIN, "Enterprise", UserStatus.ACTIVE, "London, UK", LocalDate.of(2025, 6, 22)),
                user("Benjamin Davis", "benjamin.davis@saasboard.io", "User@123", UserRole.USER, "Pro", UserStatus.INACTIVE, "Chicago, USA", LocalDate.of(2024, 10, 14)),
                user("Charlotte Lopez", "charlotte.lopez@saasboard.io", "User@123", UserRole.USER, "Starter", UserStatus.ACTIVE, "Mexico City, Mexico", LocalDate.of(2025, 1, 30)),
                user("Lucas Hall", "lucas.hall@saasboard.io", "User@123", UserRole.USER, "Enterprise", UserStatus.ACTIVE, "Berlin, Germany", LocalDate.of(2025, 7, 4))
            ));
        };
    }

    private UserAccount user(
        String name,
        String email,
        String password,
        UserRole role,
        String plan,
        UserStatus status,
        String location,
        LocalDate joinedAt
    ) {
        UserAccount user = new UserAccount();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);
        user.setPlan(plan);
        user.setStatus(status);
        user.setLocation(location);
        user.setJoinedAt(joinedAt);
        return user;
    }
}
