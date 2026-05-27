import { apiRequest } from "@/src/lib/api";
import type { OrderResponse, OrdersResponse, Order } from "@/src/lib/types";

type ShippingAddress = {
  label?: string;
  line1: string;
  city: string;
  postcode: string;
  country: string;
};

type SingleOrderResponse = { order: Order };

export async function createOrder(shippingAddress: ShippingAddress, token: string): Promise<OrderResponse> {
  return apiRequest<OrderResponse>("/orders", {
    method: "POST",
    body: { shippingAddress },
    token,
  });
}

export async function getMyOrders(token: string): Promise<OrdersResponse> {
  return apiRequest<OrdersResponse>("/orders/my", { method: "GET", token });
}

export async function getOrderById(orderId: string, token: string): Promise<SingleOrderResponse> {
  return apiRequest<SingleOrderResponse>(`/orders/${orderId}`, { method: "GET", token });
}
