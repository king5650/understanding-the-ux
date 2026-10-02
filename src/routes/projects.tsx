import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — AS-AFRICA Staff" },
    { name: "description", content: "Manage project stories and galleries." },
    { property: "og:title", content: "Projects — AS-AFRICA Staff" },
    { property: "og:description", content: "Manage project stories and galleries." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ContentPage type="Projects" />,
});
