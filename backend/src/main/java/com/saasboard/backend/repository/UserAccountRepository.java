package com.saasboard.backend.repository;

import com.saasboard.backend.model.UserAccount;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {

    Optional<UserAccount> findByEmailIgnoreCase(String email);

    List<UserAccount> findAllByOrderByIdAsc();
}
