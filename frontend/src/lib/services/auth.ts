import { apiRequest } from "@/src/lib/api";
import type { AuthResponse, User } from "@/src/lib/types";

type ProfileResponse = { message: string; user: User };

export async function login(email: string, password: string): Promise<AuthResponse> {
  return apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

export async function register(
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  return apiRequest<AuthResponse>("/auth/register", {
    method: "POST",
    body: { name, email, password },
  });
}

export async function updateProfile(name: string, token: string): Promise<ProfileResponse> {
  return apiRequest<ProfileResponse>("/auth/me", {
    method: "PATCH",
    body: { name },
    token,
  });
}

export async function addAddress(
  address: { label: string; line1: string; city: string; postcode: string; country: string },
  token: string
): Promise<ProfileResponse> {
  return apiRequest<ProfileResponse>("/auth/me/addresses", {
    method: "POST",
    body: address,
    token,
  });
}

export async function deleteAddress(addressId: string, token: string): Promise<ProfileResponse> {
  return apiRequest<ProfileResponse>(`/auth/me/addresses/${addressId}`, {
    method: "DELETE",
    token,
  });
}

export async function updateAddress(
  addressId: string,
  address: { label: string; line1: string; city: string; postcode: string; country: string },
  token: string
): Promise<ProfileResponse> {
  return apiRequest<ProfileResponse>(`/auth/me/addresses/${addressId}`, {
    method: "PATCH",
    body: address,
    token,
  });
}
