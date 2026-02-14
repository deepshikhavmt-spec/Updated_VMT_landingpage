import "./WhyChooseUs.css";
import { motion } from "framer-motion";

const features = [
  {
    title: "Performance-Driven Advertising",
    desc: <p>Spend smarter. Scale faster.<br/>We build and manage high-performing ad campaigns across platforms, targeting the right audiences with precision to drive measurable growth and consistent results.</p>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 4h7v7" />
      </svg>
    )
  },
  {
    title: "Revenue Growth Campaigns",
    desc: <p>Increase sales, not just traffic.<br/>By aligning ads, funnels, and conversion strategies, we help you boost revenue across channels optimizing for purchases, bookings, and high-value actions.</p>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    title: "Brand Awareness & Traffic Growth",
    desc: <p>Build visibility that converts over time.<br/>Our brand campaigns increase reach, engagement, and targeted traffic positioning your brand in front of the right audience and supporting long term growth.</p>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M4 19V5" />
        <path d="M10 19V9" />
        <path d="M16 19V3" />
      </svg>
    )
  },
  {
    title: "Social Media Growth",
    desc: <p>Grow reach, engagement, and authority.<br/> We design social campaigns that increase followers, boost engagement, and build brand trust especially on Meta and LinkedIn for business focused growth.</p>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.2 1 2h6c0-.8.3-1.4 1-2a7 7 0 0 0-4-12z" />
      </svg>
    )
  },
  {
    title: "Lead Generation",
    desc: <p>Turn interest into qualified leads.<br/>Our focused ad strategies are designed to capture high-intent users, filter out noise, and deliver leads that are more likely to convert into paying customers.</p>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.5-4 14.5-4 16 0" />
      </svg>
    )
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: <p>Drive consistent, high intent organic traffic.<br/> We optimize your website for search engines with data backed SEO strategies improving rankings, increasing visibility, and attracting users who are actively searching for your products or services. </p>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="8" r="5" />
        <path d="M8 14l-1 8 5-3 5 3-1-8" />
      </svg>
    )
  }
];

/* Animation Variants */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhyChooseUs() {
  return (
    <motion.section
      className="why-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      {/* HEADER */}
      <motion.div className="why-header" variants={fadeUp}>
        <h2>Services Designed for Scalable Growth</h2>
        <p>
          We combine strategic thinking with flawless execution to deliver
          measurable results.
        </p>
      </motion.div>

      {/* CARDS */}
      <motion.div className="why-grid" variants={sectionVariants}>
        {features.map((item, i) => (
          <motion.div
            className="why-card"
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <motion.div
              className="why-icon"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              {item.icon}
            </motion.div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
