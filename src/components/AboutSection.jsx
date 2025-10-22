import { Code, User, Cpu } from "lucide-react"

export const AboutSection = () => {
  return <section id="about" className="py-24 relative">
    {" "}
    <div className="container max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer & AI/ML Enthusiast
          </h3>

          <p className="text-muted-foreground">
            With over 5 years of experience in web development, I specialize
            in creating responsive, accessible, and performant web
            applications using modern technologies.
          </p>

          <p className="text-muted-foreground">
            I'm passionate about creating elegant solutions to complex
            problems, and I'm constantly learning new technologies and
            techniques to stay at the forefront of the ever-evolving web
            landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">{" "}Get In Touch</a>
            <a href={`${import.meta.env.BASE_URL}Dipesh_Singh_CV.pdf`} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with
                  modern frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> AI/ML Solutions</h4>
                <p className="text-muted-foreground">
                  Developing intelligent applications using machine learning
                  and artificial intelligence.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> UI/UX Designing</h4>
                <p className="text-muted-foreground">
                  Creating user-centered designs that are both functional and
                  aesthetically pleasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}