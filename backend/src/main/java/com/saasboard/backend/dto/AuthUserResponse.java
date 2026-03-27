package com.saasboard.backend.dto;

public record AuthUserResponse(
    Long id,
    String name,
    String email,
    String role,
    String plan,
    String status,
    String location,
    String passwordHint
) {
}
