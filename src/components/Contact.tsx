
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-bold text-white/5 pointer-events-none font-serif">
            CONTACT
          </div>
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Get In <span className="text-purple">Touch</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple mr-4" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:hello@majillani.com" className="text-purple-light hover:text-purple transition-colors">
                    hello@majillani.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 text-purple mr-4" />
                <div>
                  <p className="text-gray-400">LinkedIn</p>
                  <a href="https://linkedin.com/in/majillani" target="_blank" rel="noopener noreferrer" className="text-purple-light hover:text-purple transition-colors">
                    linkedin.com/in/majillani
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Github className="w-6 h-6 text-purple mr-4" />
                <div>
                  <p className="text-gray-400">GitHub</p>
                  <a href="https://github.com/majillani" target="_blank" rel="noopener noreferrer" className="text-purple-light hover:text-purple transition-colors">
                    github.com/majillani
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full p-3 bg-dark border border-white/10 rounded-md focus:outline-none focus:border-purple"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full p-3 bg-dark border border-white/10 rounded-md focus:outline-none focus:border-purple"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project inquiry"
                  className="w-full p-3 bg-dark border border-white/10 rounded-md focus:outline-none focus:border-purple"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full p-3 bg-dark border border-white/10 rounded-md focus:outline-none focus:border-purple"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-8 py-3 bg-purple text-white rounded-md font-semibold hover:bg-purple/80 hover:translate-y-[-2px] transition-all flex items-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
