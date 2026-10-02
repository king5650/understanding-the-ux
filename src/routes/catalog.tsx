import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/catalog")({
  head: () => ({ meta: [
    { title: "Catalog — AS-AFRICA Staff" },
    { name: "description", content: "Manage catalog items and availability." },
    { property: "og:title", content: "Catalog — AS-AFRICA Staff" },
    { property: "og:description", content: "Manage catalog items and availability." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ContentPage type="Catalog" />,
});
