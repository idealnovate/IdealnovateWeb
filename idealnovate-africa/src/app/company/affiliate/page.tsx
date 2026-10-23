import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate | Idealnovate Africa",
  description: "Earn a commission by referring learners to Idealnovate programmes.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Resources"
      title="Affiliate"
      mark="Affiliate"
      summary={"Earn a commission by referring learners to Idealnovate programmes."}
      plans={[
        "How the affiliate programme works",
        "Commission rates and how payouts are made",
        "How to sign up and get your referral link",
      ]}
      emailSubject="Affiliate programme enquiry"
      emailLabel="Email us about the programme"
    />
  );
}
