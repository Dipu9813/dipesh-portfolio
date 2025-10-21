import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaGithub, FaFigma, FaCode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

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

    //Tools
    { name: 'Git', level: 80, category: "tools", icon: FaGitAlt },
    { name: 'Github', level: 80, category: "tools", icon: FaGithub },
    { name: 'Figma', level: 70, category: "tools", icon: FaFigma },
    { name: 'VS Code', level: 95, category: "tools", icon: FaCode },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const filteredSkills = skills.filter(skill => activeCategory === "all" || skill.category === activeCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setHoveredCard(index);
    };

    return (
        <section ref={sectionRef} id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={key}
                                className="relative bg-card p-6 rounded-lg border border-border/50 card-hover overflow-hidden group"
                                onMouseMove={(e) => handleMouseMove(e, key)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Spotlight effect on hover */}
                                {hoveredCard === key && (
                                    <div
                                        className="absolute pointer-events-none transition-opacity duration-300"
                                        style={{
                                            background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent)`,
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                        }}
                                    />
                                )}

                                <div className="relative z-10 flex items-center gap-3 mb-3">
                                    <div className="relative">
                                        <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                </div>

                                <div className="relative z-10 w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-primary h-2 rounded-full transition-all"
                                        style={{ 
                                            width: isVisible ? skill.level + "%" : "0%",
                                            transition: 'width 1.5s ease-out',
                                            transitionDelay: `${key * 0.1}s`
                                        }}
                                    />
                                </div>

                                <div className="relative z-10 text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};