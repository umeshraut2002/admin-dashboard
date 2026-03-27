package com.saasboard.backend.service;

import com.saasboard.backend.dto.AuthUserResponse;
import com.saasboard.backend.dto.UserResponse;
import com.saasboard.backend.model.UserAccount;

public final class UserMapper {

    private UserMapper() {
    }

    public static UserResponse toUserResponse(UserAccount user) {
        return new UserResponse(
            user.getId(),
            user.getName(),
            user.getEmail(),
            toDisplayValue(user.getRole().name()),
            user.getPlan(),
            toDisplayValue(user.getStatus().name()),
            user.getLocation(),
            user.getJoinedAt()
        );
    }

    public static AuthUserResponse toAuthUserResponse(UserAccount user, String password) {
        return new AuthUserResponse(
            user.getId(),
            user.getName(),
            user.getEmail(),
            toDisplayValue(user.getRole().name()),
            user.getPlan(),
            toDisplayValue(user.getStatus().name()),
            user.getLocation(),
            password.length() >= 8 ? "Strong password entered" : "Weak password entered"
        );
    }

    private static String toDisplayValue(String value) {
        String normalized = value.toLowerCase().replace('_', ' ');
        return Character.toUpperCase(normalized.charAt(0)) + normalized.substring(1);
    }
}
