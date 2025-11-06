import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import {cn} from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        
        // If no theme is stored, default to dark
        if (!storedTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);


    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };
    
    return <button onClick={toggleTheme} className={cn("fixed top-5 md:right-5 right-16 z-50 p-2 rounded-full transition-colors duration-300 bg-background/80 backdrop-blur-sm border border-border hover:bg-accent",
        "focus:outline-hidden"
    )}>{isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300" />)
        :
        (<Moon className="h-6 w-6 text-blue-900" />)}</button>
}