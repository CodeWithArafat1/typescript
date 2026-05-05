type Product = {
  id: number;
  name: string;
  price: number;
  stock: string;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price" | "stock">;

type ProductWithOutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;
