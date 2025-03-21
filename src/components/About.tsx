
const About = () => {
  return (
    <section id="about" className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-bold text-white/5 pointer-events-none font-serif">
            ABOUT
          </div>
          <h2 className="text-4xl font-serif font-bold text-center mb-16">About <span className="text-purple">Me</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold mb-4">My Background</h3>
            <p className="text-gray-300 mb-4">
              With over 5 years of experience in web development, I've worked on a wide range of projects from small business websites to large-scale enterprise applications. My passion lies in creating clean, efficient, and user-friendly interfaces that provide exceptional user experiences and drive business growth.
            </p>
            <p className="text-gray-300 mb-6">
              I graduated with a degree in Computer Science and have since dedicated myself to mastering modern web technologies. I believe in continuous learning and staying up-to-date with the latest industry trends and best practices to deliver solutions that truly make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-purple-light font-bold mb-2 font-serif">Frontend</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript (ES6+)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-light font-bold mb-2 font-serif">Backend</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>REST / GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-effect p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-serif font-bold mb-4">My Approach</h3>
              <p className="text-gray-300">
                I approach each project with a focus on your business goals, user needs, and conversion optimization. My development process emphasizes clean code, performance, and accessibility, ensuring your website not only looks great but also converts visitors into customers. I believe in collaborative development and clear communication throughout the project lifecycle.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">Education & Experience</h3>
              <div className="mb-4">
                <h4 className="text-purple-light font-semibold font-serif">Senior Frontend Developer | TechCorp</h4>
                <p className="text-gray-400">2020 - Present</p>
              </div>
              <div className="mb-4">
                <h4 className="text-purple-light font-semibold font-serif">Web Developer | DigitalAgency</h4>
                <p className="text-gray-400">2018 - 2020</p>
              </div>
              <div>
                <h4 className="text-purple-light font-semibold font-serif">BSc Computer Science | Tech University</h4>
                <p className="text-gray-400">2014 - 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
