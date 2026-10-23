import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Idealnovate Africa",
  description: "Webinars, bootcamps and masterclasses run by Idealnovate tutors and industry guests.",
};

export default function Page() {
  return (
    <ComingSoon
      section="Company"
      title="Events"
      mark="Events"
      summary={"Webinars, bootcamps and masterclasses run by Idealnovate tutors and industry guests."}
      plans={[
        "Upcoming webinars and masterclasses",
        "Bootcamp dates and how to register",
        "Recordings of past sessions",
      ]}
      emailSubject="Events enquiry"
      emailLabel="Email us about events"
    />
  );
}
