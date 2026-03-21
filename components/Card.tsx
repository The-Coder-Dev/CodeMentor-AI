import React from "react";
import { Bug } from "lucide-react";
import { GraduationCap } from "lucide-react";


const CardData = [
  {
    title: "AI Code Explainer",
    paragraph:
      "Instatnt identification and semantic fixes for deep logic errors and complex syntax bugs across 5+ languages.",
    icon: Bug,
    id: 1,
  },
  {
    title: "AI Code Tutor",
    paragraph:
      "Personlized 1-on-1 coding mentorship powered by advanced LLMs tailored to your experience level.",
    icon: GraduationCap,
    id: 2,
  },
  {
    title: "Code Visualization",
    paragraph:
      "Personlized 1-on-1 coding mentorship powered by advanced LLMs tailored to your experience level.",
    icon: GraduationCap,
    id: 3,
  }
];

function Card() {
  return (
    <div className="grid grid-cols-3 gap-6 text-foreground">
      {CardData.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="p-7 py-15 bg-green/10 rounded-md border border-green/20 flex flex-col gap-3"
          >
            <Icon size={55} className=" bg-green/20 rounded-sm p-3" />
            <h1 className=" text-2xl font-[sora] font-semibold">
              {item.title}
            </h1>
            <p className="text-foreground/40">{item.paragraph}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
