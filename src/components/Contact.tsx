import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, AlertCircle } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleProjectTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Send form data using Formspree
    try {
      const response = await fetch('https://formspree.io/f/mblyryyw', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (result.ok) {
        setSubmitMessage({ type: 'success', text: 'Your message has been sent! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', projectType: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: 'There was an error sending your message. Please try again later.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'There was an error sending your message. Please try again later.' });
    }
    setIsSubmitting(false);
  };

  const projectTypes = [
    { value: "web-design", label: "Web Design" },
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "ui-ux", label: "UI/UX Design" },
    { value: "branding", label: "Branding" },
    { value: "other", label: "Other" }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 right-0 w-72 h-72 bg-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Get In <span className="text-blue">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential collaboration? 
            Fill out the form below and I'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-effect p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <a href="mailto:majillani.official@gmail.com" className="text-xl text-blue-light hover:text-blue transition-colors break-all">
                    majillani.official@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <a href="tel:+923064503109" className="text-xl text-blue-light hover:text-blue transition-colors">
                      +923064503109
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Location</p>
                    <p className="text-xl">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-12">
                <p className="text-gray-400 mb-4">Follow Me</p>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://www.linkedin.com/in/ma-jillani-759a7b324/" 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 112, 243, 0.2)" }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* LinkedIn SVG */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://x.com/jillani_designs" 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 112, 243, 0.2)" }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Twitter SVG */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/maj.uiux/" 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 112, 243, 0.2)" }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Instagram SVG */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg flex items-start ${
                  submitMessage.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                }`}>
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <p>{submitMessage.text}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-3 text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full p-4 text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue transition-colors text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-3 text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full p-4 text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue transition-colors text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-3 text-lg">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="w-full p-4 text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue transition-colors text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-3 text-lg">
                    Project Type (Optional)
                  </label>
                  <Select value={formData.projectType} onValueChange={handleProjectTypeChange}>
                    <SelectTrigger className="w-full p-4 text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue transition-colors text-white h-auto">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-darkblue border border-white/10 text-white">
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="focus:bg-blue/20 focus:text-white">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-3 text-lg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="w-full p-4 text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue transition-colors text-white resize-none"
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-blue text-white rounded-lg font-medium hover:bg-blue/80 transition-all flex items-center justify-center disabled:opacity-70 text-lg"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0,112,243,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
