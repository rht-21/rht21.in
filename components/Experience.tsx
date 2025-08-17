import React from "react";
import { ExperienceItemType, WorkExperience } from "./ui/work-experience";

const Experience = () => {
  const WORK_EXPERIENCE: ExperienceItemType[] = [
    {
      id: "1",
      companyName: "Volumetree",
      companyLogo: "/company/volumetree.jpeg",
      isCurrentEmployer: true,
      positions: [
        {
          id: "1-1",
          title: "AI/ML Engineer",
          employmentPeriod: "Jun 2025 - Present",
          employmentType: "Full-time (Remote)",
          description:
            "Working on EaseMyHiring, an AI-powered interview platform, focusing on intelligent proctoring systems with Dlib and YOLO. Developed POCs for voice-based agents and contributed to full-cycle AI pipelines.",
          icon: "code",
          skills: ["Python", "Dlib", "YOLO", "LiveKit", "AI/ML"],
          isExpanded: true,
        },
      ],
    },
    {
      id: "2",
      companyName: "Nira Tech and Solutions",
      companyLogo: "/company/nira.png",
      isCurrentEmployer: false,
      positions: [
        {
          id: "2-1",
          title: "Web Developer",
          employmentPeriod: "Oct 2024 - May 2025",
          employmentType: "Full-time (Remote)",
          description:
            "Developed responsive and user-friendly web apps, integrated REST APIs, and optimized data fetching. Improved API response time by 30% and user satisfaction by 70%.",
          icon: "code",
          skills: ["Next.js", "React.js", "AWS", "API Integration"],
        },
      ],
    },
    {
      id: "3",
      companyName: "Defensium Labs",
      companyLogo: "/company/defensium.png",
      isCurrentEmployer: false,
      positions: [
        {
          id: "3-1",
          title: "Software Developer",
          employmentPeriod: "Jan 2024 - Oct 2024",
          employmentType: "Full-time (Remote)",
          description:
            "Led a 4-member team to build secure applications from scratch. Developed Cyber Bharat Foundation and DefenderX with Next.js and MongoDB, focusing on authentication, responsive UI, and penetration testing features.",
          icon: "code",
          skills: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk", "Security"],
        },
      ],
    },
  ];

  return (
    <main className="border-b">
      <div className="border-vertical align-center flex flex-col gap-4 p-4 text-lg">
        <WorkExperience experiences={WORK_EXPERIENCE} />
      </div>
    </main>
  );
};

export default Experience;
