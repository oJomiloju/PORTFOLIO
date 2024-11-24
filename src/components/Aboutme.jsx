const Aboutme = () => {
    return (
      <section className="bg-[#e4f3a6] text-black">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-mono">
            / about me
          </h2>
  
          {/* About Text */}
          <p className="text-lg md:text-xl leading-relaxed mb-8 font-mono">
            I am a <span className="font-bold">Software Engineer </span> 
            based in <span className="font-bold">Dallas-Fort Worth, Texas</span>. 
            While completing my degree in Software Engineering at the <span className="font-bold">University of Texas Arlington</span>, I am working on 
            building impactful, user-centered applications and exploring the 
            latest advancements in technology.
          </p>
  
          {/* Technologies Section */}
          <h3 className="text-2xl font-semibold mb-4">Technologies I’ve been working with:</h3>
          <ul className="grid grid-cols-2 gap-4 font-mono">
            <li>➤ JavaScript (ES6+)</li>
            <li>➤ Python</li>
            <li>➤ React.js</li>
            <li>➤ Java</li>
            <li>➤ Tailwind CSS</li>
            <li>➤ MySQL</li>
          </ul>
  
          {/* Interests Section */}
          <p className="text-lg md:text-xl leading-relaxed mt-8 font-mono">
            Outside of work, I enjoy exploring new technologies, working on creative coding projects, 
            and contributing to community initiatives. I’m also passionate about playing soccer and exploring art in all its forms, 
            Whether it’s on the field, at a gallery, or in the 
            virtual world, I’m always looking for new ways to stay inspired.
          </p>
        </div>
      </section>
    );
  };
  
  export default Aboutme;
  
