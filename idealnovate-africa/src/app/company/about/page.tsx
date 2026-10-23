import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Idealnovate Africa",
  description: "The story behind Idealnovate Africa: why we started, who we serve, and the people teaching our programmes.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Company"
      title="About Us"
      mark="About"
      summary={"The story behind Idealnovate Africa: why we started, who we serve, and the people teaching our programmes."}
      plans={[
        "Our mission and how we train job-ready talent",
        "The team and tutors behind the schools",
        "Milestones and the learners we've trained",
      ]}
      emailSubject="About Idealnovate Africa"
      emailLabel="Email our team"
    />
  );
}
