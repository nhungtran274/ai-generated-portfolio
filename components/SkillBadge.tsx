import React from "react";

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded mr-2 mb-2">{skill}</span>
  );
};

export default SkillBadge;