import "./Hero.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import VideoTrigger from "../VideoTrigger";
import VideoModal from "../VideoModal";

import logo from "../../assets/vmt-logo.png";

// trust logos
import winkies from "../../assets/clients/winkies.png";
import solitario from "../../assets/clients/solitario.svg";
import Vilogo from "../../assets/clients/Vilogo.svg";
import vritus from "../../assets/clients/vritus-logo.jpg";
import rupe from "../../assets/clients/rupe.png";

// CONSTANT LINKS
const WHATSAPP_LINK =
"https://wa.me/917743999900?text=Hi%20I%20just%20submitted%20the%20lead%20form";

const CALENDLY_LINK =
"https://calendly.com/mayastone2343/30min";

// PABBLY WEBHOOK
const WEBHOOK_URL =
"https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTZhMDYzNDA0MzY1MjZiNTUzNCI_3D_pc/IjU3NjcwNTZmMDYzNzA0MzA1MjY4NTUzMDUxMzIi_pc";

export default function Hero() {
const formRef = useRef();
const [isVideoOpen, setIsVideoOpen] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();


const formData = new FormData(formRef.current);

const data = {
  name: formData.get("name"),
  company: formData.get("company"),
  phone: formData.get("phone"),
  email: formData.get("email"),
  ad_spend: formData.get("ad_spend"),
  agency_budget: formData.get("agency_budget"),
  urgency: formData.get("urgency"),
  past_ads: formData.get("past_ads"),
};

try {
  // Send lead to Pabbly webhook
  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Admin Email
  await emailjs.sendForm(
    "service_94al6bj",
    "template_gex9yoh",
    formRef.current,
    "bxKMgYG2cUpLAAthh"
  );

  // User Email
  await emailjs.sendForm(
    "service_94al6bj",
    "template_jw2kk8b",
    formRef.current,
    "bxKMgYG2cUpLAAthh"
  );

  alert("Thank you! Please check your email to book a strategy call.");
  e.target.reset();

} catch (error) {
  console.error("Submission Error:", error);
  alert("Something went wrong. Please try again.");
}


};

return ( <section className="hero-wrapper">
{/* TOP BAR */} <div className="hero-top"> <img src={logo} alt="Viral Marketing Trends" className="hero-logo" />
<VideoTrigger onClick={() => setIsVideoOpen(true)} /> </div>


  {/* VIDEO MODAL */}
  <VideoModal open={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

  <div className="hero-grid">

    {/* LEFT CONTENT */}
    <div className="hero-left">
      <h1>
        Expand Your Business <br />
        Effortlessly With <br />
        <span>Performance Marketing</span>
      </h1>

      <p className="hero-sub">
        Boost your Sales | Generate Relevant Leads | Create Brand Awareness
      </p>

      <p className="recognized">RECOGNIZED BY</p>

      <div className="trust-logos">
        <img src={winkies} alt="Winkies" />
        <img src={solitario} alt="Solitario" />
        <img src={Vilogo} alt="Vilogo" />
        <img src={vritus} alt="Vritus" />
        <img src={rupe} alt="Rupe" />
      </div>
    </div>

    {/* RIGHT FORM */}
    <div className="hero-form">
      <form ref={formRef} onSubmit={handleSubmit}>

        <input type="hidden" name="whatsapp_link" value={WHATSAPP_LINK} />
        <input type="hidden" name="calendly_link" value={CALENDLY_LINK} />

        <div className="form-grid">

          <div className="form-field">
            <label>Name*</label>
            <input name="name" placeholder="Enter your full name" required />
          </div>

          <div className="form-field">
            <label>Company Name*</label>
            <input name="company" placeholder="Enter your company name" required />
          </div>

          <div className="form-field">
            <label>Phone Number*</label>
            <input name="phone" placeholder="Enter your phone number" required />
          </div>

          <div className="form-field">
            <label>Business Email ID*</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your business email address"
              required
            />
          </div>

          <div className="form-field">
            <label>What is your current Ad spend?*</label>
            <select name="ad_spend" required>
              <option value="">-None-</option>
              <option>Below ₹50,000</option>
              <option>₹50,000 – ₹1,00,000</option>
              <option>₹1,00,000+</option>
            </select>
          </div>

          <div className="form-field">
            <label>
              Are you open to spending more than Rs. 50,000 in agency fees?*
            </label>
            <select name="agency_budget" required>
              <option value="">-None-</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="form-field">
            <label>How urgently are you looking to start?</label>
            <select name="urgency">
              <option value="">-None-</option>
              <option>Immediately</option>
              <option>Within 1 Month</option>
              <option>Just Exploring</option>
            </select>
          </div>

          <div className="form-field">
            <label>Have you run Ads in the past?</label>
            <select name="past_ads">
              <option value="">-None-</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

        </div>

        <button type="submit" className="hero-form-btn">
          Book a Call
        </button>

      </form>
    </div>

  </div>
</section>


);
}
