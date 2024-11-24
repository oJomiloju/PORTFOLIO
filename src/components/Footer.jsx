const Footer = () => {
    return (
      <footer className="bg-[#e4f3a6] text-black py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-lg">Jomi</p>
          </div>
  
          {/* Right Section */}
          <div className="text-sm space-y-2 font-mono">
            <p>(682) 718-6025</p>
            <p>
              <a
                href="mailto:jomilojuokuwobi@gmail.com"
                className="hover:underline"
              >
                jomilojuokuwobi@gmail.com
              </a>
            </p>
            <p>
              Built and Designed by{" "}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jomiloju Okuwobi
              </a>
            </p>
            
            <p>Dallas-Fort Worth, TX</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  