import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [
    { title: "Settings — AS-AFRICA Staff" },
    { name: "description", content: "Manage business information and staff roles." },
    { property: "og:title", content: "Settings — AS-AFRICA Staff" },
    { property: "og:description", content: "Manage business information and staff roles." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SettingsPage />,
});
