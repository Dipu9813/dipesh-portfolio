import { ArrowDown } from "lucide-react";
import profileImage from "../assets/profile.png"; // Add your image here

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span><br></br>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Dipesh
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Singh
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
              I'm a passionate web developer specializing in creating modern,
              responsive web applications.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl opacity-0 animate-fade-in-delay-2">
                <img 
                  src={profileImage} 
                  alt="Dipesh Singh - Web Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional: Add a glowing effect */}
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent opacity-50 animate-pulse-subtle"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
<span className="text-sm text-muted-foreground mb-2">Scroll</span>
<ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

