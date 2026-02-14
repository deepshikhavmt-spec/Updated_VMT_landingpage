import "./ClientsWork.css";
import { motion, useReducedMotion } from "framer-motion";

/* =======================
   LOGO IMPORTS (YOUR FILES)
======================= */

import winkiesLogo from "../../assets/clients/winkies.png";
import mykvedaLogo from "../../assets/clients/mykveda.webp";
import vritusLogo from "../../assets/clients/vritus-logo.jpg";
import solitarioLogo from "../../assets/clients/solitario.svg";
import rupeLogo from "../../assets/clients/rupe.png";
import practeLogo from "../../assets/clients/practe.png";
import vodafoneLogo from "../../assets/clients/Vilogo.svg";
import aurumLogo from "../../assets/clients/Aurum.jpeg";
import aliLogo from "../../assets/clients/Alizaidi.jpeg";
import rpLogo from "../../assets/clients/RP.jpg";
import rhLogo from "../../assets/clients/RH.webp";
import xinglinLogo from "../../assets/clients/xinglin.jpeg";

/* =======================
   DATA
======================= */

const works = [
  {
    title: "Winkies",
    subtitle: "Cake & Dessert Brand",
    logo: winkiesLogo,
    desc:
      "We designed AI-driven ad creatives and performance campaigns to enhance brand visibility and product appeal."
  },
  {
    title: "Mykveda",
    subtitle: "Skincare & Wellness Brand",
    logo: mykvedaLogo,
    desc:
      "We crafted premium creatives and performance campaigns to elevate product appeal and brand presence."
  },
  {
    title: "Vritus",
    subtitle: "Pet Food & Care Brand",
    logo: vritusLogo,
    desc:
      "We manage digital ads and social growth while building strong brand authority through AI-powered creatives."
  },
  {
    title: "Solitario",
    subtitle: "Jewellery Brand",
    logo: solitarioLogo,
    desc:
      "We executed advertising campaigns with premium creatives to elevate luxury positioning."
  },
  {
    title: "Rupeeboss",
    subtitle: "Loan & Financial Services Platform",
    logo: rupeLogo,
    desc:
      "Performance-driven campaigns focused on lead generation, trust, and financial clarity."
  },
  {
    title: "Practe",
    subtitle: "English Learning & Speaking Platform",
    logo: practeLogo,
    desc:
      "Structured content and targeted campaigns to build confidence-driven communication."
  },
  {
    title: "Vodafone",
    subtitle: "Telecom Brand",
    logo: vodafoneLogo,
    desc:
      "We conceptualized and delivered a full-scale campaign driving strong recall and storytelling impact."
  },
  {
    title: "Aurum",
    subtitle: "Corporate Gifting Brand",
    logo: aurumLogo,
    desc:
      "Platform-specific content strategies to showcase product range and corporate relevance."
  },
  {
    title: "Ali Zaidi",
    subtitle: "Business Professional",
    logo: aliLogo,
    desc:
      "Structured LinkedIn branding strategy to strengthen authority and professional presence."
  },
  {
    title: "Reenita Malhotra Hora",
    subtitle: "Author | Ace of Blades",
    logo: rhLogo,
    desc:
      "Executed a complete content strategy for book launch with storytelling-led visibility."
  },
  {
    title: "Rupeen Popat",
    subtitle: "Author | Satyavati",
    logo: rpLogo,
    desc:
      "Built a premium digital presence supported by high-quality visual storytelling."
  },
  {
    title: "Xinglin",
    subtitle: "Wellness Brand",
    logo: xinglinLogo,
    desc:
      "Designed digital creatives and campaigns to enhance brand awareness and positioning."
  }
];

/* =======================
   ANIMATION
======================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: i * 0.05
    }
  })
};

export default function ClientsWork() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="clients-work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeUp}>
        What We’ve Done For Our Clients
      </motion.h2>

      <motion.p className="clients-subtitle" variants={fadeUp}>
        Real results delivered through strategy, creativity, and thoughtful execution.
      </motion.p>

      <div className="clients-grid">
        {works.map((item, i) => (
          <motion.div
            key={i}
            className="client-card"
            custom={i}
            variants={fadeUp}
            whileHover={reduceMotion ? undefined : { y: -8 }}
          >
            <div className="client-header">
              <h3>{item.title}</h3>
              <img
                src={item.logo}
                alt={item.title}
                className="client-logo"
              />
            </div>

            <span>{item.subtitle}</span>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
