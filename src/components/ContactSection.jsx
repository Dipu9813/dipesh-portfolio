import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from 'emailjs-com';
import Dock from "./Dock";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            });
            e.target.reset();
            setIsSubmitting(false);
        }).catch((error) => {
            toast({
                title: "Error",
                description: "Failed to send the message, please try again.",
                variant: "destructive",
            });
            setIsSubmitting(false);
        });
    }

    return (
        <section id="contact"
            className="py-24 px-4 bg-secondary/30 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? Feel free to reach out!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:mail@singhdipesh.com.np"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        mail@singhdipesh.com.np
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+9779813881072"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        +9779813881072
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a href="mail@singhdipesh.com.np"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Imadol, Lalitpur, Nepal
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
                            <div className="relative h-24 flex items-center justify-center">
                                <Dock 
                                    items={[
                                        {
                                            icon: <Linkedin size={28} className="text-foreground" />,
                                            label: 'LinkedIn',
                                            onClick: () => window.open('https://www.linkedin.com/in/dipesh--singh/', '_blank')
                                        },
                                        {
                                            icon: <Facebook size={28} className="text-foreground" />,
                                            label: 'Facebook',
                                            onClick: () => window.open('https://www.facebook.com/dipesh.singh.50945', '_blank')
                                        },
                                        {
                                            icon: <Instagram size={28} className="text-foreground" />,
                                            label: 'Instagram',
                                            onClick: () => window.open('https://www.instagram.com/dipesh____singh/', '_blank')
                                        }
                                    ]}
                                    magnification={65}
                                    distance={150}
                                    baseItemSize={48}
                                    panelHeight={60}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">{" "}Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    name="name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Dipesh Singh..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">{" "}Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    name="email"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="john@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">{" "}Your Message</label>
                                <textarea
                                    id="message"
                                    required
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello I would like to talk about...."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                                )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}