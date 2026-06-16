import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Home, 
  Package, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'rides',
    title: 'Premium Rides',
    description: 'Experience unparalleled comfort and style with our fleet of luxury vehicles. Professional chauffeurs at your service.',
    icon: <Car className="w-6 h-6" />,
    image: '/src/assets/images/toyota_prado_2024_1781633308843.jpg',
  },
  {
    id: 'stays',
    title: 'Luxurious Stays',
    description: 'Curated premium accommodations that redefine luxury. From penthouses to private villas, we ensure your comfort.',
    icon: <Home className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'delivery',
    title: 'Swift Delivery',
    description: 'Fast, secure, and reliable delivery for your precious items. We handle your packages with the utmost care.',
    icon: <Package className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Business Executive',
    content: 'LinkSwift Ride has completely changed my travel experience. Their premium rides are always on time and the service is impeccable.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Frequent Traveler',
    content: 'The luxurious stays they curated for my vacation were beyond expectations. Truly a premium experience from start to finish.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Entrepreneur',
    content: 'Their swift delivery service is the only one I trust with my high-value business documents. Reliable and professional.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'How do I book a premium ride?',
    answer: 'You can book directly by calling us at 08144342378 or 07019851051, or messaging us on WhatsApp at either of those numbers. We recommend booking at least 2 hours in advance for the best experience.',
  },
  {
    id: '2',
    question: 'What types of vehicles are in your fleet?',
    answer: 'Our fleet consists of late-model luxury sedans, SUVs, and executive vans, all maintained to the highest standards of cleanliness and safety.',
  },
  {
    id: '3',
    question: 'Are your delivery services insured?',
    answer: 'Yes, all our swift delivery services include basic insurance coverage for your items. For high-value goods, we offer additional protection options.',
  },
  {
    id: '4',
    question: 'What are your operating hours?',
    answer: 'We are open Monday to Friday, from 8:00 AM to 7:00 PM. However, pre-booked premium rides and stays can be serviced 24/7.',
  },
];

const OUR_WORK: WorkItem[] = [
  {
    id: '1',
    title: 'Executive Airport Transfer',
    category: 'Premium Rides',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Luxury Penthouse Suite',
    category: 'Luxurious Stays',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Express Corporate Delivery',
    category: 'Swift Delivery',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Wedding Chauffeur Service',
    category: 'Premium Rides',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
  },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-primary p-2 rounded-lg">
            <Car className="w-6 h-6 text-brand-accent" />
          </div>
          <span className={cn(
            "text-xl font-display font-bold tracking-tight",
            isScrolled ? "text-brand-primary" : "text-white"
          )}>
            LinkSwift<span className="text-brand-accent">Ride</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-brand-accent transition-colors",
                isScrolled ? "text-brand-primary" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/2347019851051"
            target="_blank"
            rel="noreferrer"
            className="bg-brand-accent text-brand-primary px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white transition-all shadow-lg hover:shadow-brand-accent/20"
          >
            Book via WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-brand-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-brand-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-brand-primary py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/2347019851051"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-accent text-brand-primary w-full py-4 rounded-xl font-bold mt-2 text-center"
            >
              Book via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
            <span className="text-brand-accent text-sm font-bold uppercase tracking-wider">Premium Service Provider</span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
            Elevating Your <span className="text-brand-accent">Journey</span> & <span className="text-brand-accent">Stay</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            LinkSwift Ride offers premium chauffeur services, luxurious accommodations, and lightning-fast delivery across the city.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="tel:08144342378"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
            >
              <Phone className="w-6 h-6 text-brand-accent" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Call</p>
                <p className="text-white font-bold">08144342378</p>
              </div>
            </a>
            <a 
              href="tel:07019851051"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
            >
              <Phone className="w-6 h-6 text-brand-accent" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Call</p>
                <p className="text-white font-bold">07019851051</p>
              </div>
            </a>
            <a 
              href="https://wa.me/2348144342378"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">WhatsApp</p>
                <p className="text-white font-bold">08144342378</p>
              </div>
            </a>
            <a 
              href="https://wa.me/2347019851051"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">WhatsApp</p>
                <p className="text-white font-bold">07019851051</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Our Premium <span className="text-brand-accent">Offerings</span></h2>
          <p className="text-lg text-gray-500">We provide a comprehensive suite of luxury services designed to cater to your every need, whether you're moving, staying, or sending.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-accent p-3 rounded-2xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-brand-accent transition-colors">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurWork = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-6">Our Work in <span className="text-brand-accent">Action</span></h2>
            <p className="text-lg text-gray-500">Take a look at some of our recent successful missions and the premium experiences we've delivered to our clients.</p>
          </div>
          <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-all shrink-0">
            View Full Gallery
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUR_WORK.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full -ml-48 -mb-48 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">What Our <span className="text-brand-accent">Clients Say</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here's what our valued clients have to say about their LinkSwift experiences.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 text-lg italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-accent"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-brand-accent text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Frequently Asked <span className="text-brand-accent">Questions</span></h2>
          <p className="text-lg text-gray-500">Everything you need to know about our services and booking process.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div 
              key={faq.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-brand-primary">{faq.question}</span>
                <ChevronRight className={cn(
                  "w-5 h-5 text-brand-accent transition-transform",
                  openId === faq.id ? "rotate-90" : ""
                )} />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LastCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -ml-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full -mr-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl text-brand-primary mb-8">Ready to Experience <span className="underline decoration-brand-primary/20">True Luxury?</span></h2>
            <p className="text-xl text-brand-primary/70 mb-12">Join hundreds of satisfied clients who trust LinkSwift Ride for their premium needs. Book your service today.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <a 
                href="tel:08144342378"
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 08144342378
              </a>
              <a 
                href="tel:07019851051"
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 07019851051
              </a>
              <a 
                href="https://wa.me/2348144342378"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                WhatsApp 08144342378
              </a>
              <a 
                href="https://wa.me/2347019851051"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                WhatsApp 07019851051
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-primary pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-accent p-2 rounded-lg">
                <Car className="w-6 h-6 text-brand-primary" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                LinkSwift<span className="text-brand-accent">Ride</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Premium rides, luxurious stays, and swift delivery services for the discerning traveler. Excellence in every journey.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-brand-accent transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-brand-accent transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <div>
                  <a href="tel:08144342378" className="hover:text-brand-accent block transition-colors">08144342378 (Call & WhatsApp)</a>
                  <a href="tel:07019851051" className="hover:text-brand-accent block transition-colors">07019851051 (Call & WhatsApp)</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="mailto:book@linkswiftride.com" className="hover:text-brand-accent transition-colors">book@linkswiftride.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 7:00 PM</p>
                  <p>Sat - Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to get special offers and luxury travel tips.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent transition-all"
              />
              <button className="absolute right-2 top-2 bg-brand-accent text-brand-primary p-1.5 rounded-lg hover:bg-white transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 LinkSwift Ride. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-primary">
      <Navbar />
      <Hero />
      <Services />
      <OurWork />
      <Testimonials />
      <FAQSection />
      <LastCTA />
      <Footer />
    </div>
  );
}
