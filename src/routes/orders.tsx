import { createFileRoute } from "@tanstack/react-router";
import { OrdersPage } from "@/components/dashboard/Orders";

export const Route = createFileRoute("/orders")({
  head: () => ({ meta: [
    { title: "Orders — AS-AFRICA Staff" },
    { name: "description", content: "Manage orders and payment status." },
    { property: "og:title", content: "Orders — AS-AFRICA Staff" },
    { property: "og:description", content: "Manage orders and payment status." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <OrdersPage />,
});
