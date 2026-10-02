import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Products — AS-AFRICA Staff" },
    { name: "description", content: "Manage products, prices, and inventory." },
    { property: "og:title", content: "Products — AS-AFRICA Staff" },
    { property: "og:description", content: "Manage products, prices, and inventory." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ProductsPage />,
});
