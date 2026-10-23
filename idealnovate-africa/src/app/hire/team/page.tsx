import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire a Team | Idealnovate Africa",
  description: "Build a dedicated tech team, or upskill your existing staff, through Idealnovate.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Hire"
      title="Hire a Team"
      mark="Teams"
      summary={"Build a dedicated tech team, or upskill your existing staff, through Idealnovate."}
      plans={[
        "Assembled teams for design, data and marketing projects",
        "Corporate training for your staff",
        "How engagements, timelines and pricing work",
      ]}
      emailSubject="Hiring a team / corporate training"
      emailLabel="Email us about a team"
    />
  );
}
