import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaGithub, FaFigma, FaCode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { Layers, Monitor, Server, Wrench } from "lucide-react";
import Dock from "./Dock";

const skills = [
    //Frontend
    { name: 'HTML/CSS', level: 90, category: "frontend", icon: FaHtml5 },
    { name: 'JavaScript', level: 85, category: "frontend", icon: FaJs },
    { name: 'React', level: 80, category: "frontend", icon: FaReact },
    { name: 'TypeScript', level: 80, category: "frontend", icon: SiTypescript },
    { name: 'Tailwind CSS', level: 80, category: "frontend", icon: SiTailwindcss },
    //Backend
    { name: 'Node.js', level: 75, category: "backend", icon: FaNode },
    { name: 'Express', level: 70, category: "backend", icon: SiExpress },
    { name: 'MongoDB', level: 65, category: "backend", icon: SiMongodb },
    { name: 'PostgreSQL', level: 65, category: "backend", icon: SiPostgresql },

    //Tools
    { name: 'Git', level: 80, category: "tools", icon: FaGitAlt },
    { name: 'Github', level: 80, category: "tools", icon: FaGithub },
    { name: 'Figma', level: 70, category: "tools", icon: FaFigma },
    { name: 'VS Code', level: 95, category: "tools", icon: FaCode },
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(skill => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="relative h-28 flex items-center justify-center mb-12">
                    <Dock 
                        items={[
                            {
                                icon: <Layers size={28} className={activeCategory === "all" ? "text-primary" : "text-foreground"} />,
                                label: 'All',
                                onClick: () => setActiveCategory("all"),
                                className: activeCategory === "all" ? "ring-2 ring-primary" : ""
                            },
                            {
                                icon: <Monitor size={28} className={activeCategory === "frontend" ? "text-primary" : "text-foreground"} />,
                                label: 'Frontend',
                                onClick: () => setActiveCategory("frontend"),
                                className: activeCategory === "frontend" ? "ring-2 ring-primary" : ""
                            },
                            {
                                icon: <Server size={28} className={activeCategory === "backend" ? "text-primary" : "text-foreground"} />,
                                label: 'Backend',
                                onClick: () => setActiveCategory("backend"),
                                className: activeCategory === "backend" ? "ring-2 ring-primary" : ""
                            },
                            {
                                icon: <Wrench size={28} className={activeCategory === "tools" ? "text-primary" : "text-foreground"} />,
                                label: 'Tools',
                                onClick: () => setActiveCategory("tools"),
                                className: activeCategory === "tools" ? "ring-2 ring-primary" : ""
                            }
                        ]}
                        magnification={70}
                        distance={180}
                        baseItemSize={52}
                        panelHeight={65}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                    {filteredSkills.map((skill, key) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={key}
                                className="group flex items-center gap-3.5 px-8 py-4 rounded-full bg-card border border-border/50 card-hover hover:border-primary/50 hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] transition-all duration-300"
                            >
                                <Icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                <span className="font-medium text-lg">{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};