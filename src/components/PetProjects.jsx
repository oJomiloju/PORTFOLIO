import githubIcon from "../assets/images/github.png"; // Import GitHub icon

const PetProjects = () => {
  return (
    <section className="bg-[#e4f3a6] text-black py-12">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 font-mono">
          / pet projects
        </h2>

        {/* Projects List */}
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold font-mono text-[#bf4800]">01</span>
              <h3 className="text-2xl md:text-3xl font-bold font-mono">
                Personal Portfolio Website
              </h3>
            </div>
            {/* GitHub Icon */}
            <a
              href="https://github.com/example/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img
                src={githubIcon} // Use imported image
                alt="GitHub"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
          </div>

          {/* Project 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold font-mono text-[#bf4800]">02</span>
              <h3 className="text-2xl md:text-3xl font-bold font-mono">
                Weather Tracker App
              </h3>
            </div>
            {/* GitHub Icon */}
            <a
              href="https://github.com/example/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img
                src={githubIcon} // Use imported image
                alt="GitHub"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
          </div>

          {/* Project 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold font-mono text-[#bf4800]">03</span>
              <h3 className="text-2xl md:text-3xl font-bold font-mono">
                To-Do List App with React
              </h3>
            </div>
            {/* GitHub Icon */}
            <a
              href="https://github.com/example/project3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img
                src={githubIcon} // Use imported image
                alt="GitHub"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProjects;
