import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships | Idealnovate Africa",
  description: "Funded places on Idealnovate programmes for learners who need support to get started.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Company"
      title="Scholarships"
      mark="Scholarships"
      summary={"Funded places on Idealnovate programmes for learners who need support to get started."}
      plans={[
        "Which programmes have funded places",
        "Who can apply and how selection works",
        "Application dates and the steps to apply",
      ]}
      emailSubject="Scholarship enquiry"
      emailLabel="Email us about scholarships"
    />
  );
}
