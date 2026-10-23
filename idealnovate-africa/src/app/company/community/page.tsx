import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Idealnovate Africa",
  description: "A space for Idealnovate learners and alumni to share work, find support and grow together.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Resources"
      title="Community"
      mark="Community"
      summary={"A space for Idealnovate learners and alumni to share work, find support and grow together."}
      plans={[
        "Where our community meets and how to join",
        "Meetups, challenges and peer reviews",
        "Stories from learners and alumni",
      ]}
      emailSubject="Joining the Idealnovate community"
      emailLabel="Email us to join"
    />
  );
}
