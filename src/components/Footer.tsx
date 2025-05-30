import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];
  
  const services = [
    { name: "Web Design", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Mobile Development", href: "#services" },
    { name: "Brand Identity", href: "#services" },
  ];
  
  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const footerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <footer className="pt-16 md:pt-24 pb-8 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue/5 rounded-full blur-3xl opacity-50"></div>
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Info Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={footerItemVariants}
          >
            <div className="mb-6">
              <motion.a 
                href="#home"
                className="text-3xl sm:text-4xl font-bold inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                MA<span className="text-blue">Jillani</span>
              </motion.a>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Creating exceptional digital experiences that help businesses stand out in the digital landscape.
            </p>
            <div className="space-y-4">
              <motion.a 
                href="mailto:majillani.official@gmail.com" 
                className="flex items-center text-gray-300 hover:text-blue transition-colors"
                whileHover={{ x: 3 }}
              >
                <Mail className="w-5 h-5 mr-3 text-blue" />
                majillani.official@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+923064503109" 
                className="flex items-center text-gray-300 hover:text-blue transition-colors"
                whileHover={{ x: 3 }}
              >
                <Phone className="w-5 h-5 mr-3 text-blue" />
                +923064503109
              </motion.a>
              <motion.div 
                className="flex items-start text-gray-300"
                whileHover={{ x: 3 }}
              >
                <MapPin className="w-5 h-5 mr-3 text-blue flex-shrink-0 mt-1" />
                <span>Islamabad, Pakistan</span>
              </motion.div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a 
                href="https://www.linkedin.com/in/ma-jillani-759a7b324/" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 112, 243, 0.2)" }}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="https://x.com/jillani_designs" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 112, 243, 0.2)" }}
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/maj.uiux/" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 112, 243, 0.2)" }}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} MA<span className="text-blue">Jillani</span>. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-x-6">
            {legalLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href}
                className="text-gray-400 text-xs hover:text-blue transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
