export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  description: string;
}

export const products:Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1299,
    inStock: true,
    description: "A high-performance laptop suitable for programming, design, and everyday use."
  },
  {
    id: 2,
    name: "Headphones",
    price: 199,
    inStock: false,
    description: "Wireless noise-cancelling headphones with deep bass and long battery life."
  },
  {
    id: 3,
    name: "Keyboard",
    price: 99,
    inStock: true,
    description: "Mechanical keyboard with RGB lighting and comfortabel customizable keys."
  },
  {
    id: 4,
    name: "Monitor",
    price: 299,
    inStock: true,
    description: "27-inch 144Hz monitor ideal for gaming and productivity and productivity."
  }
];
