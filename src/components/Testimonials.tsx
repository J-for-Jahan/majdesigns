
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ryan Matthews",
    role: "Real Estate Broker, San Jose",
    image: "/src/assets/projects/Ryan Mathews.jpg",
    quote: "This site gave my business a serious upgrade. It looks professional and clean, and clients tell me they trust it more than my old one.",
    rating: 5,
    project: "Real Estate Website (Stardust)"
  },
  {
    name: "Jane Cooper",
    role: "Independent Realtor",
    image: "/src/assets/projects/Jane Cooper.jpg",
    quote: "The website feels like me. It’s simple, personal, and my clients love how easy it is to browse listings.",
    rating: 5,
    project: "Personal Realtor Portfolio"
  },
  {
    name: "Amina Rauf",
    role: "Women's Business Coach",
    image: "/src/assets/projects/Amina Rauff.jpg",
    quote: "Super impressed with how Jillani captured my brand vibe. The site feels warm and polished — exactly what I needed.",
    rating: 5,
    project: "Women-Centered Coaching Business"
  },
  {
    name: "Daniel Carter",
    role: "Life Coach & Author",
    image: "/src/assets/projects/Daniel Carter.jpg",
    quote: "Clean, professional, and straight to the point. Clients are booking faster now — the site does half the work for me.",
    rating: 5,
    project: "LifePath Coaching Platform"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-darkblue/30">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.span 
            className="text-xs font-semibold tracking-wider text-blue uppercase inline-block mb-3 px-3 py-1 border border-blue/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client Success Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Real results for <span className="bg-gradient-to-r from-blue via-blue-light to-blue-light bg-clip-text text-transparent">real businesses</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto mt-4"
          >
            Don't take my word for it — hear from clients who've transformed their online presence
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg relative flex flex-col h-full hover:border-blue/30 hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <Avatar className="h-12 w-12 border-2 border-blue/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-blue/20 text-white">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute top-6 right-6 opacity-10 text-blue">
                  <Quote size={32} />
                </div>
              </div>
              
              <blockquote className="mb-4 text-gray-300 leading-relaxed text-sm md:text-base flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-blue-light text-sm">{testimonial.role}</div>
                <div className="text-xs text-gray-400 mt-1">{testimonial.project}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
