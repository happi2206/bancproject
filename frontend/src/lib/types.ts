export type UserRole = "user" | "admin";

export type Address = {
  _id: string;
  label: string;
  line1: string;
  city: string;
  postcode: string;
  country: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  addresses: Address[];
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CartItem = {
  productId: Product;
  quantity: number;
};

export type Cart = {
  _id: string;
  userId: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
};

export type AuthResponse = {
  message: string;
  token: string;
  user: User;
};

export type ProductsResponse = {
  count: number;
  products: Product[];
};

export type ProductResponse = {
  product: Product;
};

export type CartResponse = {
  message?: string;
  cart: Cart;
};

export type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type Order = {
  _id: string;
  orderNumber: string;
  items: OrderItem[];
  total: number;
  status: "confirmed" | "processing" | "shipped" | "delivered";
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
};

export type OrderResponse = {
  message: string;
  order: Order;
};

export type OrdersResponse = {
  orders: Order[];
};
