import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Idealnovate Africa",
  description: "Articles, guides and industry insights from Idealnovate tutors and the wider tech community.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Resources"
      title="Blog"
      mark="Blog"
      summary={"Articles, guides and industry insights from Idealnovate tutors and the wider tech community."}
      plans={[
        "Career guides for design, data, marketing and management",
        "Tool tutorials and learning tips",
        "Stories from learners who landed tech jobs",
      ]}
      emailSubject="Idealnovate blog"
      emailLabel="Email our team"
    />
  );
}
