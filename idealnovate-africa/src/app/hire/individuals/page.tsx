import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Individuals | Idealnovate Africa",
  description: "Hire vetted tech talent from Idealnovate's graduate pool for full-time, contract or internship roles.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Hire"
      title="Hire Individuals"
      mark="Talent"
      summary={"Hire vetted tech talent from Idealnovate's graduate pool for full-time, contract or internship roles."}
      plans={[
        "Profiles of job-ready designers, analysts, marketers and product people",
        "Portfolios and project work from our programmes",
        "A simple request form to get matched with candidates",
      ]}
      emailSubject="Hiring tech talent from Idealnovate"
      emailLabel="Email us about hiring"
    />
  );
}
