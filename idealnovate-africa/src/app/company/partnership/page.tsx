import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership | Idealnovate Africa",
  description: "Work with us to train more African tech talent, as a sponsor, employer, school or community partner.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Company"
      title="Partnership"
      mark="Partner"
      summary={"Work with us to train more African tech talent, as a sponsor, employer, school or community partner."}
      plans={[
        "Partnership types and what each involves",
        "How partners fund scholarships and hire graduates",
        "How to start a conversation with our team",
      ]}
      emailSubject="Partnership enquiry"
      emailLabel="Email us about partnering"
    />
  );
}
