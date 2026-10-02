import { createFileRoute } from "@tanstack/react-router";
import { Overview } from "@/components/dashboard/Overview";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Overview — AS-AFRICA Staff" },
    { name: "description", content: "Dashboard overview, revenue, orders, bookings, and issues." },
    { property: "og:title", content: "Overview — AS-AFRICA Staff" },
    { property: "og:description", content: "Dashboard overview, revenue, orders, bookings, and issues." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <Overview />,
});
