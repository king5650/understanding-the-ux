import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/equipment")({
  head: () => ({ meta: [
    { title: "Equipment — AS-AFRICA Staff" },
    { name: "description", content: "Manage equipment details." },
    { property: "og:title", content: "Equipment — AS-AFRICA Staff" },
    { property: "og:description", content: "Manage equipment details." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ContentPage type="Equipment" />,
});
