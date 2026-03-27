package com.saasboard.backend.dto;

public record LoginResponse(
    String token,
    AuthUserResponse user
) {
}
