package com.saasboard.backend.dto;

import java.time.LocalDate;

public record UserResponse(
    Long id,
    String name,
    String email,
    String role,
    String plan,
    String status,
    String location,
    LocalDate joinedAt
) {
}
