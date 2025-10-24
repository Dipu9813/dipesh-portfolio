import { NavBar } from "../components/NavBar";
import { LightningBackground } from "../components/LightningBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle */}
        <ThemeToggle />
        {/* background effects */}
        <LightningBackground />
        {/* nav bar */}
        <NavBar />
        {/* nav bar */}
        <main>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>
        <Footer />
        {/* footer */}
    </div>;
};