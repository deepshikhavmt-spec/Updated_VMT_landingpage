import { useState } from "react";

import Hero from "./components/hero/Hero";
import Marquee from "./components/Marquee";
import TrustedBy from "./components/trustedBy/TrustedBy";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import Founder from "./components/founder/Founder";
import FounderMarquee from "./components/founder_marquee/founder_marquee";

import ClientsWork from "./components/clientsWork/ClientsWork";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";

import PageLoader from "./components/loader/PageLoader";
import VimiWidget from "./components/VimiChat/VimiWidget";
import VideoTrigger from "./components/VideoTrigger";
import VideoModal from "./components/VideoModal";

export default function App() {
  const [loading, setLoading] = useState(false); // keep false for now
  const [showVideo, setShowVideo] = useState(false);

  if (loading) {
    return <PageLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      {/* Floating UI */}
      <VideoTrigger onClick={() => setShowVideo(true)} />
      <VideoModal open={showVideo} onClose={() => setShowVideo(false)} />
      <VimiWidget />

      {/* PAGE FLOW */}
      <Hero />
<Marquee />
<TrustedBy />     {/* ONLY logos */}
<Founder />
<FounderMarquee />  {/* Founder logos */}
<WhyChooseUs />   {/* Services */}

<ClientsWork />   {/* Client cards */}
<FAQ />
<Footer />

    </>
  );
}
