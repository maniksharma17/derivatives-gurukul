"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  Award,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://pages.razorpay.com/pl_R6Y588HghHCIHf/view";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Data
const benefits = [
  {
    icon: CheckCircle,
    title: "100% ACCURATE STRATEGY",
    description:
      "Two proven fully accurate strategies that work consistently in all market conditions.",
  },
  {
    icon: Clock,
    title: "Time-Tested Strategy",
    description:
      "Spot high-probability setups without complicated indicators or endless screen time.",
  },
  {
    icon: TrendingUp,
    title: "Predict Market Mastery",
    description:
      "Proven methods to protect your time and trade with confidence in any market.",
  },
  {
    icon: Award,
    title: "Real-World Examples",
    description:
      "See how our methods work in actual market scenarios - not just theory.",
  },
  {
    icon: Sparkles,
    title: "Winning Mindset",
    description:
      "Unlock the mental edge that separates consistent traders from the rest.",
  },
];

const astrologyBenefits = [
  {
    icon: "🔮",
    title: "Predictive Power",
    description:
      "Shows what will happen and when, unlike technical analysis which is reactive.",
  },
  {
    icon: "🧠",
    title: "Plan in Advance",
    description:
      "Know optimal times to buy, sell, or hold — no need to sit at the screen all day.",
  },
  {
    icon: "📊",
    title: "Avoid False Signals",
    description:
      "Technical indicators can fail; astrology adds a layer of cosmic confirmation.",
  },
  {
    icon: "💼",
    title: "Sectoral Rotation Insights",
    description: "Predict money flow between sectors using planetary cycles.",
  },
  {
    icon: "🕰️",
    title: "Timing is Everything",
    description:
      "Enter and exit trades at the right time, not just the right setup.",
  },
  {
    icon: "🌍",
    title: "Macro-Level Perspective",
    description:
      "Understand big-picture economic shifts before they reflect in charts.",
  },
  {
    icon: "🧘",
    title: "Emotional Control",
    description:
      "Align with your personal financial rhythm and avoid impulsive decisions.",
  },
  {
    icon: "⚖️",
    title: "Merge Logic with Intuition",
    description: "Combine ancient timing wisdom with modern strategy.",
  },
  {
    icon: "📅",
    title: "Use Historical Cycles",
    description: "See repeating patterns behind major market events.",
  },
  {
    icon: "💡",
    title: "Unique Market Edge",
    description:
      "Most traders ignore astrology — giving you an advantage they don't see coming.",
  },
];

const testimonials = [
  {
    quote:
      "Impressed with the efficiency and accuracy. The entire financial astrology strategies was data backed and profit-oriented.",
    author: "Karan Metha",
    role: "Banker",
    image: "/images/t4.jpeg",
  },
  {
    quote:
      "I was skeptical at first, but this approach of using astro in finance opened my eyes to a whole new level of investing.",
    author: "Sara Khan",
    role: "Financial Analyst",
    image: "/images/t1.jpeg",
  },
  {
    quote:
      "Tailored mentorship at Derivative Gurukul significantly improved my grasp of the stock market and unique trading techniques.",
    author: "Manisha Singh",
    role: "MBA Student",
    image: "/images/t2.jpeg",
  },
  {
    quote:
      "The courses were structed in a way that not only taught me the astrology behind trading but also allowed me to apply those concepts to make profits.",
    author: "Vikas Gupta",
    role: "Businessman",
    image: "/images/t3.jpeg",
  },
];

const stats = [
  { value: "25,000+", label: "Students Satisfied" },
  { value: "12+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

// -----------------------------
// Small Reusable Components
// -----------------------------

const RegisterButton = ({ href = "/register", children }: any) => (
  <motion.a
    href={href}
    role="button"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="inline-block bg-white text-stone-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
  >
    {children || "Register Now"}
  </motion.a>
);

const TestimonialCard = ({ testimonial }: any) => (
  <Card className="bg-gradient-to-br from-stone-800/90 to-stone-900/90 border-stone-600 hover:border-white transition-all duration-300 h-full group hover:shadow-2xl hover:shadow-white/20">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-stone-300 fill-current" />
        ))}
      </div>
      <p className="text-stone-100 mb-6 flex-grow italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold">{testimonial.author}</h4>
          <p className="text-stone-200 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);
const BenefitCard = ({ icon: Icon, title, description }: any) => (
  <Card
    className="relative h-full bg-stone-700 
               border border-stone-700/50 backdrop-blur-xl rounded-2xl 
               transition-all duration-300 group hover:shadow-xl hover:shadow-yellow-400/20 
               hover:border-yellow-400/60"
  >
    {/* Glow accent on hover */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 
                    bg-gradient-to-r from-yellow-400 to-yellow-200 blur-xl transition duration-500"
    />

    <CardContent
      className="relative z-10 
                 p-4 sm:p-6 md:p-8   {/* smaller padding on mobile */}
                 flex flex-col items-start"
    >
      <div
        className="p-2 sm:p-3 rounded-xl bg-stone-700/50 
                   group-hover:bg-yellow-400/20 transition duration-300"
      >
        <Icon
          className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                         text-yellow-400 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mt-4 sm:mt-6 mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
        {description}
      </p>
    </CardContent>
  </Card>
);

const AstroBenefitCard = ({ benefit }: any) => (
  <Card
    className="relative h-full 
                bg-stone-700
               border border-stone-700/50 backdrop-blur-xl rounded-2xl
               transition-all duration-300 group 
               hover:border-yellow-400/60 hover:shadow-xl hover:shadow-yellow-400/20"
  >
    {/* Glow accent on hover */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 
                    group-hover:opacity-10 bg-gradient-to-r from-yellow-400 to-yellow-200 
                    blur-2xl transition duration-500"
    />

    <CardContent className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center">
      {/* Icon */}
      <div
        className="text-4xl sm:text-5xl mb-4 
                   text-yellow-400 drop-shadow-md
                   group-hover:scale-110 transition-transform duration-300"
      >
        {benefit.icon}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3">
        {benefit.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
        {benefit.description}
      </p>
    </CardContent>
  </Card>
);

// -----------------------------
// Section Components
// -----------------------------
const RegistrationCTA = ({ className = "" }) => (
  <motion.div
    className={`relative text-center px-6 py-20 rounded-2xl overflow-hidden 
                bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 
                shadow-lg ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-30 blur-3xl" />

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
        Ready to <span className="text-yellow-400">Transform</span> <br />
        Your Trading Journey?
      </h3>
      <p className="text-stone-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Secure your spot today and gain access to strategies that have already
        transformed thousands of traders worldwide.
      </p>

      <Link href={BASE_URL}>
        <Button
          size="lg"
          className="px-10 py-5 text-lg md:text-xl font-bold rounded-full 
                   bg-yellow-400 text-black shadow-xl 
                   hover:bg-yellow-300 hover:shadow-yellow-400/40 
                   transition-all duration-300 transform hover:scale-105"
        >
          🚀 Register Now
        </Button>
      </Link>
    </div>
  </motion.div>
);

const Navbar = () => (
  <nav className="z-[999] cursor-pointer w-full fixed left-0 right-0 top-0 flex items-center justify-center bg-stone-800 h-16">
    <Link href={"#hero"}>
      <h1 className="font-poppins tracking-wide font-semibold text-md md:text-xl lg:text-2xl text-yellow-500">
        Derivatives Gurukul
      </h1>
    </Link>
  </nav>
);

const images = [
  "/images/s1.jpeg",
  "/images/s2.jpeg",
  "/images/s3.jpeg",
  "/images/s4.jpeg",
  "/images/s5.jpeg",
  "/images/s1.jpeg",
  "/images/s2.jpeg",
  "/images/s3.jpeg",
  "/images/s4.jpeg",
  "/images/s5.jpeg",
];

const ImageScroller = () => {
  return (
    <section className="w-full overflow-hidden bg-stone-900 py-10">
      <div className="relative flex overflow-hidden">
        {/* 2 rows for seamless looping */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // speed of scrolling
          }}
        >
          {images.concat(images).map((src, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={src}
                alt={`scroller-img-${i}`}
                width={400}
                height={400}
                className="h-44 w-64 rounded-xl shadow-lg object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const images2 = [
  "/images/c1.jpeg",
  "/images/c2.jpeg",
  "/images/c3.jpeg",
  "/images/c1.jpeg",
  "/images/c2.jpeg",
  "/images/c3.jpeg",
];

const ImageScroller2 = () => {
  return (
    <section className="w-full overflow-hidden bg-stone-900 py-10">
      <div className="relative flex overflow-hidden">
        {/* 2 rows for seamless looping */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // speed of scrolling
          }}
        >
          {images2.concat(images).map((src, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={src}
                alt={`scroller-img-${i}`}
                width={400}
                height={400}
                className="h-full w-64 rounded-xl shadow-lg object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HeroSection = () => (
  <section
    id="hero"
    className="font-poppins lg:mt-16 relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black" />

    {/* Video Background */}
    <div className="absolute inset-0">
      <video
        className="hidden md:block w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero5.mp4" type="video/mp4" />
      </video>
      <video
        className="block md:hidden w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero5.mp4" type="video/mp4" />
      </video>
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center md:items-start justify-between">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center mx-auto md:max-w-2xl"
      >
        <h1
          className="font-poppins text-4xl md:text-6xl font-extrabold mb-4 
          bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent
          drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        >
          Learn How To Find Dates of Big Moves in Stock Market
        </h1>

        <h2 className="text-xl md:text-3xl font-bold mb-6 text-white">
          Before Everyone Else Does
        </h2>
        <p className="text-lg md:text-xl mb-12 text-white">
          Unlock Proven & Time Tested Strategy Used By Top 1% Traders
        </p>

        <Link href={BASE_URL}>
          <Button
            size="lg"
            className="px-10 py-8 text-lg md:text-xl font-bold rounded-full
          bg-yellow-300 text-black
          shadow-md hover:shadow-lg hover:bg-yellow-400 
          transition-transform duration-300 hover:scale-105"
          >
            Register Now
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

const WebinarCard = ({ i }: any) => (
  <motion.div variants={fadeInUp} key={i}>
    <Card className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 border-stone-700 hover:border-stone-400 transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`https://images.pexels.com/photos/${
            i === 1 ? "2292837" : i === 2 ? "159888" : "186461"
          }/pexels-photo-${
            i === 1 ? "2292837" : i === 2 ? "159888" : "186461"
          }.jpeg?auto=compress&cs=tinysrgb&w=400`}
          alt={`Webinar detail ${i}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">
          {i === 1
            ? "Market Analysis Mastery"
            : i === 2
            ? "Planetary Timing Secrets"
            : "Trading Psychology"}
        </h3>
        <p className="text-stone-100">
          {i === 1
            ? "Learn advanced techniques to read market movements using celestial patterns."
            : i === 2
            ? "Discover how planetary cycles influence market trends and timing."
            : "Master the mental game of trading with cosmic alignment strategies."}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

const banners = ["/images/b1.jpeg", "/images/b2.jpeg", "/images/b3.jpeg"];

const ImageGridSection = () => (
  <section className="min-h-screen grid grid-cols-1 md:grid-cols-3">
    {banners.map((src, i) => (
      <div key={i} className="relative md:w-full md:h-screen h-[70vh]">
        <Image
          src={src}
          alt={`grid-img-${i}`}
          fill
          className="md:object-cover object-contain"
          priority
        />
      </div>
    ))}
  </section>
);

const BenefitsSection = () => (
  <section className="py-20 bg-gradient-to-r from-stone-950 to-stone-900">
    <div className="container mx-auto px-4">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-stone-200 bg-clip-text text-transparent">
          Benefits of Attending the Webinar
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <BenefitCard {...benefit} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const AstrologySection = () => (
  <section className="py-20 bg-stone-950/30">
    <div className="container mx-auto px-4">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl py-4 font-bold bg-gradient-to-r from-stone-300 to-white bg-clip-text text-transparent">
          Why Learn Financial Astrology?
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {astrologyBenefits.map((benefit, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <AstroBenefitCard benefit={benefit} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-20 bg-gradient-to-r from-stone-900 to-stone-950">
    <div className="container mx-auto px-4">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-stone-200 bg-clip-text text-transparent">
          Here's what our Students say:
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {testimonials.map((t, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <TestimonialCard testimonial={t} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CTAOptionsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-stone-900 via-stone-950 to-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          Our destiny depends on the choice we made!
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-stone-100 max-w-2xl mx-auto"
        >
          You can act now, secure your spot and discover the proven roadmap
          that's transformed thousands of traders' results just like you!
        </motion.p>

        {/* Options */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Option 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-red-900/50 border border-red-700 rounded-2xl p-6 shadow-lg hover:shadow-red-500/30 transition"
          >
            <h3 className="text-xl font-semibold text-red-400 mb-3">
              ❌ OPTION 1
            </h3>
            <p className="text-red-100">
              You can close this page and keep doing what you're doing and end
              up in the exact same place you are now and keep making losses.
            </p>
          </motion.div>

          {/* Option 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-green-900/50 border border-green-700 rounded-2xl p-6 shadow-lg hover:shadow-green-500/30 transition"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              ✅ OPTION 2
            </h3>
            <p className="text-green-100">
              You can act now, secure your spot, and finally start following the
              roadmap that has already transformed thousands of traders’
              results.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <Button
            size="lg"
            className="px-10 py-6 text-lg font-bold rounded-full bg-yellow-300 text-black 
                       shadow-md hover:shadow-lg hover:bg-yellow-400 transition-transform duration-300 hover:scale-105"
          >
            Secure Your Spot Now 🚀
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-stone-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
    <span className="block text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2">
      {value}
    </span>
    <p className="text-stone-100 font-semibold">{label}</p>
  </div>
);

const StatsSection = () => (
  <section className="py-20 bg-stone-800">
    <div className="container mx-auto px-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <StatCard value={stat.value} label={stat.label} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const MentorSection = () => (
  <section className="py-20 bg-gradient-to-r from-stone-950 to-stone-900">
    <div className="container mx-auto px-4">
      <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
        {/* Mentor Image */}
        <div className="relative w-56 h-56 rounded-full overflow-hidden mx-auto mb-8 border-4 border-yellow-400 shadow-lg">
          <Image
            src={"/images/a1.jpeg"}
            alt="Mentor"
            fill
            className="object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-stone-200 bg-clip-text text-transparent">
          Meet Your Mentor
        </h2>

        {/* Name */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          Mr. Vikas Jain
        </h3>

        {/* Description */}
        <p className="text-lg text-stone-100 mb-8 max-w-2xl mx-auto">
          With over 12 years of experience, Mr. Vikas Jain is regarded as the
          industry's guru in financial astrology. He is the visionary founder of
          <span className="text-yellow-400 font-semibold">
            {" "}
            Derivatives Gurukul{" "}
          </span>
          and a renowned speaker at India’s prestigious Traders Conclave.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              12+ Years Experience
            </h4>
            <p className="text-stone-100">In financial astrology & markets</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Founder of Derivatives Gurukul
            </h4>
            <p className="text-stone-100">Training & mentoring traders</p>
          </div>
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Speaker at India’s Traders Conclave
            </h4>
            <p className="text-stone-100">Recognized thought leader</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="px-4 py-20 bg-gradient-to-t from-stone-950 to-stone-900 text-center">
    <div className="container mx-auto px-4">
      <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-stone-300 via-white to-stone-200 bg-clip-text text-transparent">
          Don't Miss This Cosmic Opportunity
        </h2>
        <p className="text-xl text-stone-100 mb-12">
          Join thousands of successful traders who have transformed their
          trading with the power of financial astrology. Your journey to
          consistent profits starts here.
        </p>
        <Link href={BASE_URL}>
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-stone-900 px-10 py-6 md:px-16 md:py-8 text-2xl font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
          >
            Secure Your Spot Now
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="bg-stone-950 py-8 text-center border-t border-stone-800">
    <div className="container mx-auto px-4">
      <p className="text-stone-200">
        © 2025 Derivative Gurukul. All rights reserved.
      </p>
    </div>
  </footer>
);

// -----------------------------
// Page - assemble sections
// -----------------------------

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-900 to-stone-800 text-white">
      <Navbar />

      <HeroSection />

      <ImageScroller />

      <ImageGridSection />

      <RegistrationCTA />

      <BenefitsSection />

      <RegistrationCTA />

      <CTAOptionsSection />

      <AstrologySection />

      <ImageScroller2 />

      <RegistrationCTA />

      <TestimonialsSection />

      <StatsSection />

      <MentorSection />

      <RegistrationCTA />

      <FinalCTASection />

      <FooterSection />
    </div>
  );
}
