import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa"; // Import envelope icon

const Header = () => {
  const roles = [
    "Software Engineer",
    "AI Enthusiast",
    "Full Stack Developer",
    "UX/UI Designer",
    "Athlete",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Typing speed in ms

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && displayedText !== currentRole) {
      // Typing effect: Add the next character
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText !== "") {
      // Deleting effect: Remove the last character
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, typingSpeed / 2);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedText === currentRole) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      // Move to the next role after deleting
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length); // Loop through roles
    }
  }, [displayedText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <header className="bg-[#e4f3a6] text-black py-16 flex items-center justify-center">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight mb-4">
          Hi, Jomi here.
        </h1>
        <p className="text-xl md:text-2xl mt-0 font-mono">
          {displayedText}
          <span className="border-r-2 border-black animate-blink">|</span> {/* Blinking Cursor */}
        </p>
        <p className="text-lg md:text-xl mt-4 font-mono">
        Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.
        </p>

        {/* Mail Me Button */}
        <a
          href="mailto:jomilojuokuwobi@gmail.com"
          className="mt-8 inline-flex items-center px-6 py-3 border-2 border-black rounded-lg text-black font-mono text-lg hover:bg-[#bfd666] hover:text-black transition duration-300"
        >
          <FaEnvelope className="mr-2 text-xl text-black" /> {/* Icon */}
          Say hi!
        </a>
      </div>
    </header>
  );
};

export default Header;
