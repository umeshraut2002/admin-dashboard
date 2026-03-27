package com.saasboard.backend.service;

import com.saasboard.backend.dto.LoginRequest;
import com.saasboard.backend.dto.LoginResponse;
import com.saasboard.backend.model.UserAccount;
import com.saasboard.backend.repository.UserAccountRepository;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthService {

    private final UserAccountRepository userAccountRepository;

    public AuthService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    public LoginResponse login(LoginRequest request) {
        UserAccount user = userAccountRepository.findByEmailIgnoreCase(request.email())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password"));

        if (!user.getPassword().equals(request.password())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }

        String tokenSource = user.getEmail() + ":" + System.currentTimeMillis();
        String token = "demo-jwt-" + Base64.getEncoder().encodeToString(tokenSource.getBytes(StandardCharsets.UTF_8));

        return new LoginResponse(token, UserMapper.toAuthUserResponse(user, request.password()));
    }
}
