import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Team — AS-AFRICA Staff" },
    { name: "description", content: "Manage team profiles." },
    { property: "og:title", content: "Team — AS-AFRICA Staff" },
    { property: "og:description", content: "Manage team profiles." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ContentPage type="Team" />,
});
