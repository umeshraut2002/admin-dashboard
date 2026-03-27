package com.saasboard.backend.service;

import com.saasboard.backend.dto.UserResponse;
import com.saasboard.backend.repository.UserAccountRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserAccountRepository userAccountRepository;

    public UserService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    public List<UserResponse> getUsers() {
        return userAccountRepository.findAllByOrderByIdAsc()
            .stream()
            .map(UserMapper::toUserResponse)
            .toList();
    }
}
