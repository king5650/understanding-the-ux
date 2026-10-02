import { createFileRoute } from "@tanstack/react-router";
import { IssuesPage } from "@/components/dashboard/Management";

export const Route = createFileRoute("/issues")({
  head: () => ({ meta: [
    { title: "Issues — AS-AFRICA Staff" },
    { name: "description", content: "Review operational alerts." },
    { property: "og:title", content: "Issues — AS-AFRICA Staff" },
    { property: "og:description", content: "Review operational alerts." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <IssuesPage />,
});
