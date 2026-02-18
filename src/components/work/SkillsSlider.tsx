"use client";

import { ScrollingSlider } from "@/components/work/ScrollingSlider";
import { Flex, Text, Icon } from "@once-ui-system/core";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, 
  FaDocker, FaAws 
} from "react-icons/fa";
import { 
  SiTypescript, SiMongodb, SiExpress, SiFlutter, SiDart, SiFirebase, 
  SiTailwindcss, SiRedux, SiNextdotjs, SiPostgresql 
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
];

export const SkillsSlider = () => {
  return (
    <ScrollingSlider gap="48" className="skills-slider">
      {skills.map((skill) => (
        <Flex key={skill.name} gap="12" vertical="center">
          <Icon as={skill.icon} name={skill.name} size="l" onBackground="neutral-weak" />
          <Text variant="body-strong-m" onBackground="neutral-weak">
            {skill.name}
          </Text>
        </Flex>
      ))}
    </ScrollingSlider>
  );
};
