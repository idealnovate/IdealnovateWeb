import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Idealnovate Africa",
  description: "Answers to common questions about our programmes, payments, scholarships and certificates.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Resources"
      title="FAQ"
      mark="FAQ"
      summary={"Answers to common questions about our programmes, payments, scholarships and certificates."}
      plans={[
        "How our programmes, cohorts and schedules work",
        "Fees, payment plans and scholarships",
        "Certificates and support after you graduate",
      ]}
      emailSubject="Question for Idealnovate"
      emailLabel="Email us your question"
    />
  );
}
