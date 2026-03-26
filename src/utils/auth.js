import { ROLES } from './constants';

export const LOGIN_CREDENTIALS = {
  admin: {
    email: 'admin@saasboard.io',
    password: 'Admin@123',
    role: ROLES.admin,
    name: 'Ava Reynolds',
  },
  user: {
    email: 'user@saasboard.io',
    password: 'User@123',
    role: ROLES.user,
    name: 'Mason Lee',
  },
};

export function getMockUserFromEmail(email) {
  const normalizedEmail = email.trim().toLowerCase();
  const match = Object.values(LOGIN_CREDENTIALS).find(
    (credential) => credential.email === normalizedEmail,
  );

  if (!match) {
    return {
      email: normalizedEmail,
      role: ROLES.user,
      name: 'Jordan Smith',
    };
  }

  return {
    email: match.email,
    role: match.role,
    name: match.name,
  };
}

export function generateToken(email) {
  return `mock-jwt-token-${btoa(`${email}-${Date.now()}`)}`;
}
