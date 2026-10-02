import { createFileRoute } from "@tanstack/react-router";
import { BookingsPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/bookings")({
  head: () => ({ meta: [
    { title: "Bookings — AS-AFRICA Staff" },
    { name: "description", content: "View and manage appointments." },
    { property: "og:title", content: "Bookings — AS-AFRICA Staff" },
    { property: "og:description", content: "View and manage appointments." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <BookingsPage />,
});
