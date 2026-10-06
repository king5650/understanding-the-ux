import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/dashboard/Profile";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [
    { title: "My Profile — AS-AFRICA Staff" },
    { name: "description", content: "View and update your staff profile, security, and notification preferences." },
    { property: "og:title", content: "My Profile — AS-AFRICA Staff" },
    { property: "og:description", content: "View and update your staff profile, security, and notification preferences." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ProfilePage />,
});
