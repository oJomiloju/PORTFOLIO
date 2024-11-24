import { useState } from "react";

const Research = () => {
  // State to manage the active project
  const [activeProject, setActiveProject] = useState("Physical Therapy App");
  const [isTransitioning, setIsTransitioning] = useState(false); // Manage animation

  // Project details
  const projects = {
    "Physical Therapy App": {
      title: "Physical Therapy App for ACL Recovery",
      description: `A React Native application designed to assist individuals
        recovering from ACL injuries. It provides personalized recovery plans
        and leverages AI to analyze movement, offering users real-time guidance
        throughout their recovery journey.`,
      additional: `Currently in development, the app focuses on creating a seamless
        experience for users through interactive features and precision AI analysis.`,
    },
    "Charity App": {
      title: "Charity App for Community Giving",
      description: `A React Native application aimed at fostering community giving.
        It connects users to local charity events and enables them to donate items and
        resources to those in need.`,
      additional: `The app is focused on empowering individuals to make a positive
        impact while streamlining the process of finding and contributing to charitable events.`,
    },
  };

  // Handle Project Change with Animation
  const handleProjectChange = (project) => {
    if (project !== activeProject) {
      setIsTransitioning(true); // Start transition
      setTimeout(() => {
        setActiveProject(project);
        setIsTransitioning(false); // End transition
      }, 300); // Match the transition duration
    }
  };

  return (
    <section className="bg-[#e4f3a6] text-black py-12">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 font-mono">
          / Research
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/4 mb-8 md:mb-0 border-l-2 border-[#424d15] pl-4">
            <ul className="space-y-4 font-mono text-lg">
              {Object.keys(projects).map((project) => (
                <li
                  key={project}
                  onClick={() => handleProjectChange(project)}
                  className={`cursor-pointer ${
                    activeProject === project
                      ? "text-[#52601d] font-bold"
                      : "text-black hover:text-[#373f14]"
                  } transition duration-300`}
                >
                  {project}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div
            className={`md:w-3/4 md:pl-8 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#323a11] mb-2">
              {projects[activeProject].title}
            </h3>
            <p className="text-lg font-mono leading-relaxed mb-4">
              {projects[activeProject].description}
            </p>
            <p className="text-lg font-mono leading-relaxed">
              {projects[activeProject].additional}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

