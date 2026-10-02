import { createFileRoute } from "@tanstack/react-router";
import { MessagesPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/messages")({
  head: () => ({ meta: [
    { title: "Messages — AS-AFRICA Staff" },
    { name: "description", content: "Review customer messages." },
    { property: "og:title", content: "Messages — AS-AFRICA Staff" },
    { property: "og:description", content: "Review customer messages." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <MessagesPage />,
});
